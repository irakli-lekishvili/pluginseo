import AlertErrorOutline from 'material-ui/svg-icons/alert/error-outline'
import NavigationCheck from 'material-ui/svg-icons/navigation/check'

export function SeverityIcon(status) {
  status = status.toLowerCase()

  if (status === 'warning')
    return <AlertErrorOutline />
  else
    return <NavigationCheck />
}

export function SeverityText(status) {
  status = status.toLowerCase()
  if (status === 'warning')
    return 'what\'s wrong'
  else
    return 'you\'ve passed this check'
}
