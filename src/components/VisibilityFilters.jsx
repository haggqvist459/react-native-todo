import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { setFilter } from '../redux/actions'
import { VISIBILITY_FILTERS } from '../utils/constants'

const VisibilityFilters = () => {

        const activeFilter = useSelector(state => state.visibilityFilter);
        console.log('activeFilter', activeFilter);
        const dispatch = useDispatch();


        return (
                <View style={styles.filterRow}>
                        {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                                const currentFilter = VISIBILITY_FILTERS[filterKey];
                                return (
                                        <TouchableOpacity
                                                key={`visibility-filter-${currentFilter}`}
                                                onPress={() => dispatch(setFilter(currentFilter))}
                                                // className={`filter ${currentFilter === activeFilter ? "filter--active" : ""}`}
                                                style={styles.filter}
                                        >
                                                <Text style={[styles.filterText, currentFilter === activeFilter ? styles.filterActive : '']}>{currentFilter}</Text>
                                        </TouchableOpacity>
                                )
                        })}
                </View>
        )
}

export default VisibilityFilters

const styles = StyleSheet.create({
        filterRow: {
                flexDirection: 'row',
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'space-around',
                
        },
        filter: {
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-around',
        },
        filterActive: {
                borderBottomWidth: 1,
                fontWeight: 'bold'
        },
        filterText: {
                fontSize: 22,
                
        },
})
