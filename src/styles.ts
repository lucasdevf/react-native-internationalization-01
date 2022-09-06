import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    paddingStart:24,
    paddingEnd:24,
  },
  languages: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48
  },
  logo: {
    maxWidth: 260,
    height: 260,
    alignSelf: 'center',
    marginBottom: 44,
    borderRadius: 9999
  },
  title: {
    color: '#2e1652',
    fontSize: 24,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 12,
    color: '#757575',
    fontSize: 16
  },
  signInButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#371961',
    width: '100%',
    marginTop: 36,
    padding: 16,
    borderRadius: 4
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  signInGoogleButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 20,
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  signInGoogleButtonText: {
    fontWeight: 'bold',
    marginLeft: 18
  },
  logoGoogle: {
    maxWidth: 20,
    height: 20,
  }
})