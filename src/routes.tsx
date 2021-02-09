import { Route , Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Portfolio from './Pages/Portfolio'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/contato" exact component={Contato} />
            <Route path="/portfolio" exact component={Portfolio} />
        </Switch>
    )
}

export default Routes