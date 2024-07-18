import PropTypes from 'prop-types';

const ActionBtn = ({ children, bgColor, submit, title }) => {
    return (
        <button onSubmit={submit} className='shadow-sm p-2 rounded-md shadow-black' >
            <span className={`p-3 rounded-lg text-white text-4xl inline-block ${bgColor}`}>
            {children}
            </span>
            <h2 className='text-lg mt-1 text-white'>{title}</h2>
        </button>
    );
};
ActionBtn.propTypes = {
    children: PropTypes.any,
    bgColor: PropTypes.string,
    title: PropTypes.string,
    submit: PropTypes.any,
}

export default ActionBtn;