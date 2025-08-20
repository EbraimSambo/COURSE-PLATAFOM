"use client"
import React from 'react'
import Accounts from './accounts'

const DataAssting = () => {
    return (
        <div>
            <h3 className="text-lg font-medium">Seus Dados</h3>
            <p className="text-sm text-muted-foreground">
                Gerencie seus dados e configurações de privacidade.
            </p>
            <div className="pt-2">
                <Accounts  />
            </div>
        </div>
    )
}

export default DataAssting