import { Input, message, Spin } from 'antd'
import axios from 'axios'
import { useAtom } from 'jotai'
import { memo, useEffect, useState } from 'react'

import { BASE_URL } from '../../../../api/requet'
import {
  dataAccSearchAtom,
  pageSizeAccAtom,
  skipAccAtom,
  totalAccSearchAtom,
  valueAccSearchAtom
} from '../../../atom/store'
import Cookies from 'js-cookie'

const { Search } = Input

const SearchAccount = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [skip] = useAtom(skipAccAtom)
  const [pageSize] = useAtom(pageSizeAccAtom)
  const [dataSearch, setDataAccSearch] = useAtom(dataAccSearchAtom)
  const [parkingCode, setParkingCode] = useState()
  useEffect(() => {
    const initialValues = sessionStorage.getItem('parkingCode')
    setParkingCode(initialValues)
  }, [])
  const handleSearchAccount = (value) => {
    // setIsLoading(true)
    const getVehicles = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/get_info_vehicle_search?search=${value}`
        )
        console.log(response.data)
        setDataAccSearch(response.data)
      } catch (error) {
        // Xử lý lỗi khi gọi API
        console.error(error)
      }
    }
    //   await axios
    //     .get(
    //       `${BASE_URL}/get_info_vehicle_search?search=${value}`
    //     )
    //     .then((response) => {
    //       console.log(`${BASE_URL}/get_info_vehicle_search?search=${value}`)
    //       if (response.data.length === 0) {
    //         message.error('No results found!')
    //       } else {
    //         message.info('Get data success!')
    //         //setValueAccSearch(value)
    //         setDataAccSearch(response.data)
    //         console.log("aaaa"+ response)
    //         // console.log('aabbbbbaaaa', dataSearch)
    //         // setTotalAccSearch(response.data.result.totalItems)
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //       // setData(newDataConfigFailure)
    //     })
    //   setIsLoading(false)
    // }
    getVehicles()
  }
  // useEffect(() => {
  //   const searchData = Object.entries(
  //     parseInt(Cookies.get('role')) === 0 ? vehicles : vehicles
  //   )
  //     .filter((item) => item[1].parkingCode == parrkingCode)
  //     .map((item, index) => ({
  //       key: index,
  //       entryTime: item[1].entryTime,
  //       parkingCode: item[1].parkingCode,
  //       username: item[1].username,
  //       vehicleyType: item[1].vehicleyType,
  //       image: item[1].image,
  //       LisenseVehicle: item[1].lisenseVehicle,
  //     }));
  //     setDataAccSearch(searchData);
  //     console.log("aaaaaa",dataSearch)

  // }, [vehicles]);

  return (
    <>
      <Spin size="large" spinning={isLoading}>
        <Search
          placeholder="Search"
          onSearch={handleSearchAccount}
          style={{
            width: 170
          }}
        />
      </Spin>
    </>
  )
}

export default memo(SearchAccount)
