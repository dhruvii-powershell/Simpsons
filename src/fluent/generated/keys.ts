import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'b7e3684ce7af4c5a9ff7d8b5e9b360d3'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'ea319a276698493ca0e4794aa8f4b5e3'
                    }
                }
            }
        }
    }
}
