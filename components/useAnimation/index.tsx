import { useEffect } from 'react'
import plugins from './plugins'
import { form, about } from './animations'

function useAnimation() {
    useEffect(() => {
        plugins()
        
        form()
        about()
    }, [])
}

export default useAnimation
