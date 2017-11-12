import { connect } from 'react-redux';
import Link from './Link'
import { setVisibilityFilter } from '../actions/actions'

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;