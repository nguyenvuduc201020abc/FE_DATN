import { atom } from 'jotai'
import { RoleEnum } from '../../shares/role'

export const authAtom = atom(true)
export const userAtom = atom({
  id: 0,
  userName: '',
  password: ''
})

export const toggleLayout = atom(
  (get) => get(authAtom),
  (get, set, _args) => set(authAtom, get(!authAtom))
)
const updateAccount = (account) => account

export const updateAccountAtom = atom(
  () => '',
  (get, set, account) => {
    set(accountLoginAtom, updateAccount(account))
  }
)
export const accountLoginAtom = atom({
  role: RoleEnum.undefined,
  userName: '',
  id: 0,
  password: ''
})
export const deviceClickRowAtom = atom({})
export const vehicleModalData = atom({})
export const vehicleBillModalData = atom({})

export const vehicleTypeModalData = atom({})



export const wifi1InfoAtom = atom([])
export const accountDataAtom = atom([])
export const vehiclesDataAtom = atom([])

export const searchByIdAtom = atom(0)
export const rowDeviceObjectAtom = atom({})

export const toggleSidebarAtom = atom(false)

export const loadingAtom = atom(false)
export const dataUpdateDeviceAtom = atom([])

export const modalAddUserIconAtom = atom(false)

// device search
export const skipDeviceAtom = atom(0)
export const pageSizeDeviceAtom = atom(10)
export const totalDeviceAtom = atom(10)
export const dataSearchAtom = atom([])
export const totalSearchAtom = atom([])
export const valueSearchAtom = atom('')
//bien
export const licenseMoto = atom()
// anh

export const capturedImagee = atom(null)
// account search
export const skipAccAtom = atom(0)
export const pageSizeAccAtom = atom(10)
export const totalAccAtom = atom(10)
export const dataAccSearchAtom = atom([])
export const totalAccSearchAtom = atom([])
export const valueAccSearchAtom = atom('')
// Parking Search
export const dataParkSearchAtom = atom([])
export const totalParkSearchAtom = atom([])
export const valueParkSearchAtom = atom('')
export const parkingDataAtom = atom([])
export const dataParkingAtom = atom([])
export const modalCostVehicle = atom()



//
export const userReceiveNotificationAtom = atom([])
export const isNotificationCounterAtom = atom(false)
export const modalbillVisible = atom(false)


export const isNotificationCounterNumberAtom = atom([])

export const chatSenderAtom = atom('')

// export const chatUserSenderAtom = atom('')


