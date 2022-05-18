
const Topbar = ({children}) => {
    return (
        <header style={{
            display: 'flex',
            height: '68px',
            width: '100%',
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#C3CFD9',
            position: 'fixed',
            top: '0',
            right: '0',         
        }}>
            <span style={{ color: '#E8833A', fontSize:'34px' }}>{children}</span>
        </header>
    );
};

export default Topbar;