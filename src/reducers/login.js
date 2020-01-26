const GET_USER = 'GET_USER'

const initialState = {
  username: '',
  password: '',
  authentication: false,
  user: {
    username: 'JaclynFoster',
    password: 'Password',
    email: 'Jaclyndshahan@gmail.com',
    image: 'https://i.imgur.com/e225YR5.jpg'
  },
  messages: [],
  response: false,
  reply: "",

}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'SET_USERNAME':
      return { ...tempState, username: action.payload }
    case 'SET_PASSWORD':
      return { ...tempState, password: action.payload }
    case 'USER_AUTH':
      return { ...tempState, authentication: action.payload }
    case 'VERIFY_USER':
      return { ...tempState, user: action.payload }
    case GET_USER + '_PENDING':
      return Object.assign({}, state, { isLoading: true })
    case GET_USER + '_FULFILLED':
      return Object.assign({}, state, {
        user: action.payload,
        isLoading: false
      })
      case 'USER_MESSAGES':
      return {...tempState, messages: action.payload}
      case 'MESSAGE_RESPONSE':
      return {...tempState, response: action.payload}
      case 'MESSAGE_REPLY':
      return {...tempState, reply: action.payload}
  }
  return tempState
}
