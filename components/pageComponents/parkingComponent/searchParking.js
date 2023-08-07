import { Input, Spin, message } from "antd"
import axios from "axios"
import { useAtom } from "jotai"

import { memo, useState } from "react"
import { BASE_URL } from "../../../api/requet"
import { dataParkSearchAtom, pageSizeAccAtom, skipAccAtom, totalParkSearchAtom, valueParkSearchAtom } from "../../atom/store"

const { Search } = Input
const SearchParking = () =>{
  const [isLoading, setIsLoading] = useState(false)
  const [skip] = useAtom(skipAccAtom)
  const [pageSize] = useAtom(pageSizeAccAtom)
  const [, setDataParkSearch] = useAtom(dataParkSearchAtom)
  const [, setTotalParkSearch] = useAtom(totalParkSearchAtom)
  const [, setValueParkSearch] = useAtom(valueParkSearchAtom)

  const handleSearchAccount = (value) => {
    setIsLoading(true)
    const GetParking = async () => {
      await axios
      .get(
        `${BASE_URL}parking/search?Skip=${skip}&PageSize=${pageSize}&Search=${value}`
      )
      .then((response)=>{
        if (response.data.result.items.length === 0) {
          message.error('Không tìm thấy kết quả nào')
        } else {
          message.info('Lấy dữ liệu thành công')
          setValueParkSearch(value)
          setDataParkSearch(response.data.result.items)
          setTotalParkSearch(response.data.result.totalItems)
        }
      })

    }
    setIsLoading(false)
    GetParking()
}
    return(
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
export default memo(SearchParking)