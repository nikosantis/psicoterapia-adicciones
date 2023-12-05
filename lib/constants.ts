import { SectionScroll } from './contexts/scroll'

export const TITLE =
  'Diplomado en Adicciones | Universidad de Santiago de Chile'
export const DESCRIPTION =
  'Diplomado en Adicciones | Universidad de Santiago de Chile'

type NavigationType = {
  id: number
  title: string
  scrollTo: SectionScroll
}

export const navigation: NavigationType[] = [
  {
    id: 0,
    title: 'Admisión 2024',
    scrollTo: 'home',
  },
  {
    id: 1,
    title: 'Sobre el Diplomado',
    scrollTo: 'about',
  },
  {
    id: 2,
    title: 'Modulos',
    scrollTo: 'modules',
  },
  {
    id: 3,
    title: 'Docentes',
    scrollTo: 'teachers',
  },
  {
    id: 4,
    title: 'Contacto',
    scrollTo: 'contact',
  },
]
