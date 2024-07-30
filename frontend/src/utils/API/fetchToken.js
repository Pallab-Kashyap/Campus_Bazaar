const fetchToken = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if(token) return token.token
    return false;
}

export default fetchToken;