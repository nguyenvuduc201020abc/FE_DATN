  import { Button, Col, Form, Input, Pagination, Popconfirm, Row, Spin, Table, Tooltip, Typography, message } from "antd"
  import { memo, useEffect, useState } from "react"
  import Container from "../../containers/container"
  import COLOR from "../../../utils/color"
  import { Router, useRouter } from "next/router"
  import ReloadIcon from "../../icons/reloadIcon"
  import AddParkingModal from "./addParkingModal"
  import SearchParking from "./searchParking"
  import styled from "styled-components"
  import { dataParkSearchAtom, deviceClickRowAtom, parkingDataAtom, totalParkSearchAtom, valueParkSearchAtom } from "../../atom/store"
  import { useAtom } from "jotai"
  import Cookies from "js-cookie"
  import axios from "axios"
  import { BASE_URL } from "../../../api/requet"
  import EditIcon from "../../icons/editIcon"
  import DeleteIcon from "../../icons/deleteIcon"
  import { EyeOutlined } from "@ant-design/icons"
  import { UrlPath } from "../../../type/urlPath"

  const TableAntStyled = styled(Table)`
    background-color: #f5f0bb !important;
  `
  const ParkingComponent = ()=>{
      const [isLoading, setLoading] = useState(false)
      const [parkingInfo, setParkingInfo] = useState([])

      const [data, setData] = useAtom(parkingDataAtom)
      const [dataOri, setDataOri] = useState('')
      const [skip, setSkip] = useState(0)
      // const [pageSize, setPageSize] = useState(10)
      // const [totalItem, setTotalItem] = useState(0)
      const [, setDeviceClickRow] = useAtom(deviceClickRowAtom)
      const [parkingAdminInfo,setParkingAdminInfo] = useState()
      const [dataSearch, setDataAccSearch] = useAtom(dataParkSearchAtom)
      // const [totalSearch, setTotalAccSearch] = useAtom(totalParkSearchAtom)
      // const [valueSearch, setValueAccSearch] = useAtom(valueParkSearchAtom)
      // useEffect(() => {
      //   var cookies = document.cookie.split(';');
      //   var parkingCode;
      //   for (var i = 0; i < cookies.length; i++) {
      //     var cookie = cookies[i].trim();
      //     if (cookie.startsWith("parkingCode=")) {
      //       parkingCode = cookie.substring("parkingCode=".length, cookie.length);
      //       break;
      //     }
      //   }
      
      //   // Sử dụng giá trị parkingCode ở đây
      //   console.log(parkingCode);
      //   // Các hành động khác...
      
      // }, []); // Thay đổi dependency array nếu cần thiết
      

  // Sử dụng giá trị parkingCode
      // useEffect(() => {
      //   const fetchData = async () => {
      //     try {
            
      //         const response = await axios.get(
      //           `${BASE_URL}/get_info_all_parking`
      //         );
      //         setParkingInfo(response.data);
      //         console.log(parkingInfo);
            
      //     } catch (error) {
      //       // Xử lý lỗi khi gọi API
      //       console.error(error);
      //     }
      //   };
      
      //   fetchData();
      // }, [skip]);
      useEffect(() => {
        // if (typeof window !== 'undefined') {
          const fetchData = async () => {
            try {
              const response = await axios.get(
                `${BASE_URL}/get_info_all_parking`
              );
              setParkingInfo(response.data);
            } catch (error) {
              // Xử lý lỗi khi gọi API
              console.error(error);
            }
          };
          fetchData();
        // }
      }, []);
      
      const originData = [];
      
      useEffect(() => {
        // if (typeof window !== 'undefined') {
        const processData = () => {
          const data = parseInt(Cookies.get('role')) === 0 ? parkingInfo : parkingAdminInfo;
          if (data) {
            Object.entries(data).map((item, index) => {
              originData.push({
                key: index,
                parking_name: item[1].parking_name,
                parking_address: item[1].parking_address,
                mm_price: item[1].mm_price,
                mn_price: item[1].mn_price,
                cm_price: item[1].cm_price,
                cn_price: item[1].cn_price,
                car_month: item[1].car_month,
                motor_month: item[1].motor_month,
                capacity_motor: item[1].capacity_motor,
                capacity_car: item[1].capacity_car,

              });
            });
            setDataOri(originData);
          }
        };
      
        processData();
  // }
}, [parkingInfo, parkingAdminInfo]);
      
    const EditableCell = ({
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    }) => {
      return (
        <td {...restProps}>
          {editing ? (
            <Form.Item
              name={dataIndex}
              
              style={{
                margin: 0
              }}
              rules={[
                {
                  required: true,
                  message: `Please ${title}!`
                }
              ]}
            >
              <Input />
            </Form.Item>
          ) : (
            children
          )}
        </td>
      )
    }

      const [form] = Form.useForm()
      const [editingKey, setEditingKey] = useState('')
      const isEditing = (record) => record.key === editingKey
      const edit = (record) => {
        form.setFieldsValue({
          parking_name: '',
          parking_address: '',
          mmPrice: '',
          mnPrice: '',
          cm_price: '',
          cn_price: '',
          car_month: '',
          motor_month: '',
          capacity_motor:'',
          capacity_car:'',

          ...record
        })
        setEditingKey(record.key)
      }
      
      const cancel = () => {
        setEditingKey('')
      }
      const save = async (key) => {
        setLoading(true)
        try {
          const row = await form.validateFields()
          if (Object.keys(data).length === 0) {
            var newData = [...dataOri]
            var newDataConfigFailure = [...dataOri]
          } else {
            var newData = [...data]
            var newDataConfigFailure = [...data]
          }
    
          const index = newData.findIndex((item) => key === item.key)
          if (index > -1) {
            const item = newData[index]
            newData.splice(index, 1, {
              ...item,
              ...row
            })
    
            await axios
              .put(`${BASE_URL}/update-parking`, {
                parking_name: newData[index].parking_name,
                parking_address: newData[index].parking_address,
                mm_price: newData[index].mm_price,
                mn_price: newData[index].mn_price,
                cm_price: newData[index].cm_price,
                cn_price: newData[index].cn_price,
                car_month: newData[index].car_month,
                motor_month: newData[index].motor_month,
                capacity_motor: newData[index].capacity_motor,
                capacity_car: newData[index].capacity_car,
                
              })
              .then(() => {
                message.info('Update successfully')
                setData(newData)
              })
              .catch((error) => {
                message.error(error.response.data.message)
                setData(newDataConfigFailure)
              })
          } else {
            newData.push(row)
            setData(newData)
          }
        } catch (errInfo) {
          console.log('Validate Failed:', errInfo)
        }
        setEditingKey('')
        setLoading(false)
      }

      const handleClickEye = (record) => {
        setDeviceClickRow(record)
        sessionStorage.setItem('parking_name', record.parking_name)
        // sessionStorage.setItem('parking', JSON.stringify(record))
        router.push(`${UrlPath.parkingCode.url}${record.parking_name}`)
      }
      const columns = [
        {
          title: 'Action',
          dataIndex: 'operation',
          width: '7%',
          fixed: 'left',
          render: (_, record) => {
            const editable = isEditing(record)
            return editable ? (
              <Row justify="center" gutter={[8, 4]}>
                
                <Col>
                  <Typography.Link onClick={() => save(record.key)}>
                    <Button>Save</Button>
                  </Typography.Link>
                </Col>
                {/* <Col>
                  <Popconfirm title="chắc chắn để hủy?" onConfirm={cancel}>
                    <Button>Delete</Button>
                  </Popconfirm>
                </Col> */}
              </Row>
            ) : (
              <Row justify="center" gutter={[8, 4]}>
                <Col>
                  <Tooltip title="Detail" mouseEnterDelay={0.5}>
                    <EyeOutlined
                      onClick={() => {
                        handleClickEye(record)
                      }}
                      style={{ fontSize: '20px' }}
                    />
                  </Tooltip>
                  </Col>
                <Col>
                  <Typography.Link
                    disabled={editingKey !== ''}
                    onClick={() => edit(record)}
                  >
                    <EditIcon height={'1.5em'} width={'1.5em'} />
                  </Typography.Link>
                </Col>
                {/* <Col>
                  <Popconfirm
                    title="chắc chắn để xóa?"
                    onConfirm={() => handleDelete(record.key)}
                  >
                    <div style={{ cursor: 'pointer' }}>
                      <DeleteIcon width={'20px'} height={'20px'} />

                    </div>
                  </Popconfirm>
                </Col> */}
              </Row>
            )
          }
        },
        {
          title: 'Parking name',
          dataIndex: 'parking_name',
          width: '10%',
          editable: true
        },
        {
          title: 'Address',
          dataIndex: 'parking_address',
          width: '12%',
          editable: true
        },
        {
          title: 'Motor morning price',
          dataIndex: 'mm_price',
          width: '10%',
          editable: true
        },
        {
          title: 'Motor night price',
          dataIndex: 'mn_price',
          width: '8%',
          editable: true
        },
        {
          title: 'Car morning price ',
          dataIndex: 'cm_price',
          width: '9%',
          editable: true
        },
        {
          title: 'Car night price',
          dataIndex: 'cn_price',
          width: '8%',
          editable: true
        },
        {
          title: 'Car month price',
          dataIndex: 'car_month',
          width: '8%',
          editable: true
        },
        {
          title: 'Motor month price',
          dataIndex: 'motor_month',
          width: '10%',
          editable: true
        },
        {
          title: 'Capacity motor',
          dataIndex: 'capacity_motor',
          width: '7%',
          editable: true
        },
        {
          title: 'Capacity car',
          dataIndex: 'capacity_car',
          width: '7%',
          editable: true
        }
      ]
      const mergedColumns = columns.map((col) => {
        if (!col.editable) {
          return col
        }
        return {
          ...col,
          onCell: (record) => ({
            record,
            inputType: 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record)
          })
        }
      })
      const router = useRouter()
      return (
          <>
          <Spin spinning={isLoading} tip={"Đang xử lý"}>
              <Container backgroundColor={COLOR.BEE[1]}>
                  <Button     
                  onClick = {() => router.reload()}
                      icon = {
                          <ReloadIcon
                          style={{ margin: '2px 1px 0 4px' }}
                          width={'17px'}
                          height={'17px'}
                          />
                      }>
                  </Button>
            <Row gutter={[8, 10]} style={{ marginBottom: '16px' }}>
              <Col xs={{ span: 24 }} lg={{ span: 4 }}>{parseInt(Cookies.get('role')) === 0&&
                <AddParkingModal title="Add Parking" form="add" />}
              </Col>
              <Row justify="center">
              <Col  xs={{ span: 24 }} lg={{ span: 20 }}>
              {parseInt(Cookies.get('role')) === 0&&
                    <SearchParking/>}
              </Col>
              </Row>
            </Row>
            <Form form={form} component={false}>
              <TableAntStyled
                components={{
                  body: {
                    cell: EditableCell
                  }
                }}
                bordered
                scroll={{
                  x: 400,
                  y: 600
                }}
                dataSource={
                  dataSearch.length === 0
                    ? Object.keys(data).length === 0
                      ? dataOri
                      : data
                    : dataSearch
                }
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={true}
              />
            </Form>
            {/* <Pagination
              total={dataSearch.length === 0 ? totalItem : totalSearch}
              onChange={handlePaging}
              style={{ float: 'right', margin: '10px' }}
            /> */}
              </Container>
          </Spin>
          
          
          </>
      )


  }
  export default memo(ParkingComponent)