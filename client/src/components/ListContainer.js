import React, { useEffect, useState } from 'react';
import { getListings } from '../fetch/data';
import '../styles/components/ItemList.scss';
import ItemList from './ItemList';


const { HEB_MITIGATED_LISTINGS } = {
    HEB_MITIGATED_LISTINGS: "דירות מתיווך:"
}

const ListContainer = ({ type }) => {
    return (
        <div className="ItemList__container">
            <ItemList type={type} predicate={{ attributeIsNull: 'listing.mitigatingCompany' }} />
            <h5>{HEB_MITIGATED_LISTINGS}</h5>
            <ItemList type={type} predicate={{ attributeIsntNull: 'listing.mitigatingCompany' }} />
        </div>
    )
}


export default ListContainer;
