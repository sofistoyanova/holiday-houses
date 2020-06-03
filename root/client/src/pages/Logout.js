import React, { useEffect, useState } from 'react'
import { getMethod } from '../helpers/fetch'
import Auth from '../components/Auth'
import { useHistory, useLocation } from "react-router-dom"

const Logout = () => {
    const url = 'users/logout'
    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/login" } }
    const [ backendResponse, setBackendResponse ] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getLogoutResponse = await getMethod(url)
                if(getLogoutResponse.status === 200)  {
                    Auth.logout(() => {
                        history.replace(from)
                    })
                } else if (getLogoutResponse.status == 401) {
                    Auth.logout(() => {
                        history.replace(from)
                    })
                }
            } catch(err) {
                setBackendResponse('We couldnt log you out please try again later')
            }
        }
        fetchData()
    })
    return (
        <div>
            <h1>Logout</h1>
            {backendResponse != '' ? backendResponse : ''}
        </div>
    )
}

export default Logout