import { Input, message, Spin } from 'antd'
import axios from 'axios'
import { useAtom } from 'jotai'
import { memo, useState } from 'react'
import { BASE_URL } from '../../../api/requet'
import {
  dataAccSearchAtom,
  pageSizeAccAtom,
  skipAccAtom,
  totalAccSearchAtom,
  valueAccSearchAtom
} from '../../atom/store'

const { Search } = Input

const SearchAccount = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [skip] = useAtom(skipAccAtom)
  const [pageSize] = useAtom(pageSizeAccAtom)
  const [, setDataAccSearch] = useAtom(dataAccSearchAtom)
  const [, setTotalAccSearch] = useAtom(totalAccSearchAtom)
  const [, setValueAccSearch] = useAtom(valueAccSearchAtom)

  const handleSearchAccount = (value) => {
    setIsLoading(true)
    const getUsername = async () => {
      await axios
        .get(
          `${BASE_URL}/get_employee_info_search?search=${value}`
        )
        .then((response) => {
          if (response.data.length === 0) {
            message.error('No result is found!')
          } else {
            message.info('Get result successfully!')
            //setValueAccSearch(value)
            console.log(response.data)
            setDataAccSearch(response.data)
            console.log()
            // setTotalAccSearch(response.data.result.totalItems)
          }
        })
        .catch((error) => {
          console.log(error)
          message.error('Error!')
          // setData(newDataConfigFailure)
        })
      setIsLoading(false)
    }
    getUsername()
  }

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
