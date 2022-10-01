export function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: !state.loading };
    case "ERROR":
      return { ...state, error: !state.error };
    case "AUTH":
      return { ...state, auth: !state.auth };
    default:
      return { ...state };
  }
}
