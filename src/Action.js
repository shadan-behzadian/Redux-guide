const mapDispatchtoProps = dispatch => {
    return (
       { ButtonChange : () => dispatch ({type :'message_change'})}
    )
}

export default mapDispatchtoProps