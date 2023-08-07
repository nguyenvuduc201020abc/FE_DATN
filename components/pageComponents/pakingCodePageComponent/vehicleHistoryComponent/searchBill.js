import { Input, Spin, message } from 'antd'
import { useAtom } from 'jotai'
import { useState } from 'react'
import {
  dataAccSearchAtom,
  dataParkSearchAtom,
  pageSizeAccAtom,
  skipAccAtom
} from '../../../atom/store'
import { BASE_URL } from '../../../../api/requet'
import axios from 'axios'

const { Search } = Input

const SearchBill = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [skip] = useAtom(skipAccAtom)
  const [pageSize] = useAtom(pageSizeAccAtom)
  const [dataSearch, setDataAccSearch] = useAtom(dataParkSearchAtom)

  const handleSearchBill = (value) => {
    setIsLoading(true)
    const getVehicles = async () => {
      await axios
        .get(
          `${BASE_URL}bill/search?Skip=${skip}&PageSize=${pageSize}&Search=${value}`
        )
        .then((response) => {
          if (response.data.result.items.length === 0) {
            message.error('Không tìm thấy kết quả nào')
          } else {
            message.info('Lấy dữ liệu thành công')
            //setValueAccSearch(value)
            setDataAccSearch(response.data.result.items)
            console.log('aabbbbbaaaa', dataSearch)
            // setTotalAccSearch(response.data.result.totalItems)
          }
        })
        .catch((error) => {
          message.error('Không tồn tại')
          // setData(newDataConfigFailure)
        })
      setIsLoading(false)
    }
    getVehicles()
  }

  return (
    <div>
      <Spin size="large" spinning={isLoading}>
        <Search
          placeholder="Search"
          onSearch={handleSearchBill}
          style={{
            width: 170
          }}
        />
      </Spin>
    </div>
  )
}

export default SearchBill
