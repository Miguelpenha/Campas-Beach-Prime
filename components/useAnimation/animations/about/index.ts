import page from '../../../../services/page'
import head from './head'
import body from './body'

function about() {
    page.components.main.about.sections.map((section, index) => {
        head(index, section)
        body(index, section)
    })
}

export default about