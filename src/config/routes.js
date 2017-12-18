import Home from '../components/Home.jsx'
import CardList from '../components/CardList.jsx'
import MomirBasic from '../components/MomirBasic.jsx'

export default [
  {
    name: 'Home',
    exact: true,
    path: '/',
    component: Home
  },
  {
    name: 'Cards',
    path: '/cards',
    component: CardList
  },
  {
    name: 'MomirBasic',
    path: '/momir',
    component: MomirBasic
  }
]

