import { Typography } from "@mui/material";
import PropTypes from 'prop-types'

const Headline = ({title, color}) => {
    return (
        <div className="text-center pt-10 pb-5">
            <Typography sx={{fontWeight:'800',fontSize:{xs:'1.75rem', md:'2.5rem'}, color:{color}}} >{title}</Typography>
        </div>
    );
};

Headline.propTypes={
    title: PropTypes.string,
    color: PropTypes.string
}

export default Headline;