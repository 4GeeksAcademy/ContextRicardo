export const initialStore = () => {
  return {
    contacts: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'load_contacts': {
      const { contacts } = action.payload;
      return {
        ...store,
        contacts: [...store.contacts , action.payload]
      }
    }

    default:
      throw Error('Unknown action.');
  }
}
