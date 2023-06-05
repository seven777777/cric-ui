/**
 * 导出所有组件
 */
import CArrowBtn from './components/ArrowBtn'
import CDatePlus from './components/DatePlus'
import CButton from './components/Button'

const modulesFiles = import.meta.glob('./components/**/index.ts', { eager: true })
const obj: any = {}
const components = Object.keys(modulesFiles).map((key: string) => {
    const com: any = modulesFiles[key]
    obj[com.default.name] = com.default
    return com.default
})

export default components

export { CArrowBtn, CDatePlus, CButton }
