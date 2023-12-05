import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react';
import { Link } from 'react-router-dom';

import './itemlists.scss';

function ItemLists({ type }) {
    let data;

    // Dynamicaly change the ui content
    switch (type) {
        case 'user':
            data = {
                title: 'TOTAL REFERRALS',
                isMoney: false,
                count: 23,
                icon: (
                    <PermIdentityIcon
                        style={{
                            color: 'white',
                            backgroundColor: 'black',
                        }}
                        className="icon"
                    />
                ),
                link: 'See all referrals',
                linkto: '/users',
            };
            break;
        case 'orders':
            data = {
                title: 'BALANCE',
                isMoney: false,
                count: 34,

                icon: (
                    <LocalGroceryStoreOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#FFF38C',
                        }}
                        className="icon"
                    />
                ),
                link: 'View all orders',
                linkto: '/orders',
            };
            break;
        case 'products':
            data = {
              title: "INVESTMENT",
              isMoney: true,
              count: 107,
              icon: (
                <AttachMoneyOutlinedIcon
                  style={{
                    color: "white",
                    backgroundColor: "black",
                 
                  }}
                  className="icon"
                />
              ),
              link: "See total bonus",
              linkto: "/products",
            };
            break;
        case 'balance':
            data = {
                title: 'DAILY TRANSACTION',
                count: 444,
                isMoney: true,
                icon: (
                    <PaidOutlinedIcon
                        style={{
                            color: 'white',
                            backgroundColor: 'black',
                        }}
                        className="icon"
                    />
                ),
                link: 'See time left',
                linkto: '/',
            };
            break;
        default:
            break;
    }

    return (
      <div className="item_listss">
        <div className="name">
          <p>{data.title}</p>
        </div>

        <div className="counts">
          {data.isMoney && <AttachMoneyOutlinedIcon />}
          {data.count}
        </div>

        <div className="see_item">
          <Link to={data.linkto}>
            <p>{data.link}</p>
          </Link>
          {data.icon}
        </div>
       
      </div>
    );
}

export default ItemLists;
