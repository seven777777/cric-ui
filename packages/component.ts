/**
 * 导出所有组件
 */
import CButton from './components/button'
import CIcon from './components/icon'
import CTag from './components/tag'

const modulesFiles = import.meta.glob('./components/**/index.ts', { eager: true })
const obj: any = {}
const components = Object.keys(modulesFiles).map((key: string) => {
    const com: any = modulesFiles[key]
    obj[com.default.name] = com.default
    return com.default
})

export default components

export { CButton, CIcon, CTag }
