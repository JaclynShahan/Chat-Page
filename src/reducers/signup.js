const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  createUsername: '',
  createPassword: '',
  redirect: '',
  showSignup: false,
  image: '',
  userList: []
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'SET_FIRSTNAME':
      return { ...tempState, firstName: action.payload }
    case 'SET_LASTNAME':
      return { ...tempState, lastName: action.payload }
    case 'SET_EMAIL':
      return { ...tempState, email: action.payload }
    case 'SET_CREATE_USERNAME':
      return { ...tempState, createUsername: action.payload }
    case 'SET_CREATE_PASSWORD':
      return { ...tempState, createPassword: action.payload }
    case 'SET_REDIRECT':
      return { ...tempState, redirect: action.payload }
    case 'SHOW_SIGNUP':
      return { ...tempState, showSignup: action.payload }
    case 'SET_IMAGE':
      return { ...tempState, image: action.payload }
    case 'SET_USER_LIST':
      return { ...tempState, userList: action.payload }
  }
  return tempState
}
