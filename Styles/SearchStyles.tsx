import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#E1D3FA',
    width: '100%',
    height: '100%',
  },
  searchInputWrapper: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  searchInput: {
    borderBottomColor: 'grey',
    height: 50,
    flex: 1,
  },
  searchTextInput: {
    height: '100%',
    fontSize: 18,
    marginLeft: 5,
    color: '#262626',
  },
  searchResults: {
    height: 'auto',
    width: '92%',
    alignSelf: 'center',
  },
  searchResultCard: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 50,
    alignItems: 'center',
  },
  searchResultText: {
    color: '#262626',
    padding: 10,
    fontSize: 16,
  },
});
