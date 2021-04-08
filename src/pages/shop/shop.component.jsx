import React from 'react';
import { withRouter } from 'react-router-dom';
import { PreviewCollection } from '../../components/preview-collection/preview-collection.component';
import { SHOP_DATA } from '../../data/shop-data.model';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           collections: SHOP_DATA
        }
    }

    render() {
        console.log(this.state);
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherSectionsProps}) => (
                        
                        <PreviewCollection key={id} {...otherSectionsProps}/>
                    ))
                }
            </div>
        )
    }

} 

export default withRouter(ShopPage);