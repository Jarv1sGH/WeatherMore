import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#E1D3FA',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchInputWrapper: {
    margin: 5,
    flexDirection: 'row',
    width: '90%',
    height: 45,
    paddingRight: 5,
    paddingLeft: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9C7BB6',
    borderRadius: 5,
  },
  searchInput: {
    width: '85%',
    marginLeft: 4,
    color: '#FFFAF0',
  },
  forecastButtonsWrapper: {
    width: '92%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  forecastButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    width: 100,
    backgroundColor: '#FFFF',
    borderRadius: 8,
     
  },
  selectedOption: {
    backgroundColor: '#E0B6FF',
  },
  optionText: {
    fontWeight: '600',
  },
});
