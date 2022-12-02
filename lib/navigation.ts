import { SectionScroll } from './contexts/scroll'

type NavigationType = {
  id: number
  title: string
  scrollTo: SectionScroll
}

export const navigation: NavigationType[] = [
  {
    id: 0,
    title: 'Inicio',
    scrollTo: 'home'
  },
  {
    id: 1,
    title: 'Sobre el Diplomado',
    scrollTo: 'about'
  },
  {
    id: 2,
    title: 'Modulos',
    scrollTo: 'modules'
  },
  {
    id: 3,
    title: 'Docentes',
    scrollTo: 'teachers'
  },
  {
    id: 4,
    title: 'Contacto',
    scrollTo: 'contact'
  }
]
