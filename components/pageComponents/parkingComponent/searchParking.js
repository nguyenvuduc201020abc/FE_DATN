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
        `${BASE_URL}/get_info_parking_search?search=${value}`
      )
      .then((response)=>{
        if (response.size === 0) {
          message.error('No result is found!')
        } else {
          message.info('Get result successfully!')
          setValueParkSearch(value)
          setDataParkSearch(response.data)
          setTotalParkSearch(response.data.length)
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