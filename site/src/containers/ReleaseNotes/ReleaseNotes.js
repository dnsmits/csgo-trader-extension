import React, {Fragment} from 'react';
import { Container } from 'react-bootstrap';

import Head from '../../components/Head/Head';
import NewTabLink from '../../components/NewTabLink/NewTabLink';

const releaseNotes = (props) => {
    props.gAnalytic.pageview(window.location.pathname + window.location.search);

    return  (
        <Fragment>
            <Head
                description='Release notes are meant to explain how to use new features and why certain design or policy decisions were made.'
                title='CSGO Trader - Release Notes'
                path={window.location.pathname}
            />

            <h1>Release-Notes</h1>
            <Container className='buildingBlock'>
                Release notes are meant to explain how to use new features and why certain design or policy decisions were made.
            </Container>
            <Container className='buildingBlock' id='1.23'>
                <h2>1.23 - Partner offer history summary</h2>
                <p>It might not be immediately obvious from the title of what this feature does, so let me explain and illustrate it first before going into the details.
                    Knowing how many offers a user sent you or you sent them as well as when those last happened it a valuable information for people doing trades.
                    This feature put's these snippets of ino to the Incoming Trade Offers, individual trade offer, inventory and profile pages.
                </p>
                <p>On the Incoming Trade Offers page each offer is populated with this info under each party's item like:</p>
                <img src='/img/release-notes/incomming_offers_history.jpg'
                     title='Incoming Offers partner offer history summary'
                     alt='Incoming Offers partner offer history summary'
                     className='showcaseImage'/>

                <p>In every trade offer page it is visible as an info card:</p>
                <img src='/img/release-notes/trade_offer_history.jpg'
                     title='Trade offers partner offer history summary'
                     alt='Trade offers partner offer history summary'
                     className='showcaseImage'/>

                <p>In inventories it's shown under the user's name and above the item inventories:</p>
                <img src='/img/release-notes/inventory_offer_history.jpg'
                     title='Inventories partner offer history summary'
                     alt='Inventories partner offer history summary'
                     className='showcaseImage'/>

                <p>To check it on profiles you have to open the context menu and click 'Show Offer History':</p>
                <img src='/img/release-notes/profile_hover_history.jpg'
                     title='Profile context menu hover partner offer history summary'
                     alt='Profile context menu hover partner offer history summary'
                     className='showcaseImage'/>
                <p>The information will be displayed on their profile after this':</p>
                <img src='/img/release-notes/profile_offer_history.jpg'
                     title='Profile partner offer history summary'
                     alt='Profile partner offer history summary'
                     className='showcaseImage'/>
                <p>
                    The feature uses the Steam API to get the offer history information.
                    For it to work you need to go to the option and set you API key or
                    <NewTabLink to='https://steamcommunity.com/dev/apikey'> click here to have it set automatically by the extension </NewTabLink>
                    (have the extension installed and be logged into Steam).
                    As of the writing this information is updated wherever you open the Incoming Offers Page.
                    Steam only stores the last 1000 incoming and last 500 sent offers, so the numbers you see are based on that.
                    The extension stores this data however which means that those that were visible on the first run and any after that will be accounted for in the future.
                    You can turn this feature off by going to the extension options and toggling 'Show partner history'.
                    Any questions, concerns about the feature please email
                    <NewTabLink to='mailto:support@csgotrader.app'> support@csgotrader.app</NewTabLink>.
                </p>
            </Container>
            <Container className='buildingBlock' id='1.22'>
                <h2>1.22 - Market Mass Selling (BETA)</h2>
                <p>Market Mass Selling has been one of the most requested feature for the extension since its release.
                    It's also what kept me from removing Steam Inventory Helper completely (I enabled it sometimes when
                    I wanted to list many items).
                    I am glad to announce that the feature is now in Beta.
                    Switching currencies back and forth does not seem something that Steam takes lightly so I was not
                    able to test the feature with currencies other than Euros.
                    This is mostly the reason that it's still in Beta. While using please double check the prices when
                    you are confirming them on your phone.
                    If you find any bugs or strange behavior please describe it in a mail to
                    <NewTabLink to='mailto:support@csgotrader.app'> support@csgotrader.app</NewTabLink>.
                </p>
                <p>Click the hand icon in your inventory to start selecting items that you want to sell.
                    Holding down the control key while selecting an item will also select all similar items.
                    Once you have the items you want to sell in the list specify a price for it. You have four
                    options:</p>
                <ul>
                    <li>Extension price - The price provided by the extension (from the pricing provider you have
                        selected)
                    </li>
                    <li>Starting at - The price of the current lowest listing on the market at the moment</li>
                    <li>Quick sell - The price that will make your item the cheapest listing on the market if you use
                        it. Just a bit below Starting at
                    </li>
                    <li>Your price - Specify your own price that you want the item(s) listed at</li>
                </ul>
                <p>Click "Start Mass Listing" to initiate the selling process</p>
                <img src='/img/release-notes/mass_sell_start.jpg'
                     title='Start the Mass Selling Process'
                     alt='Start the Mass Selling Process'
                     className='showcaseImage'/>
                <p>Note: You might have your extension's price set to a different currency than your Steam Wallet
                    currency. If that is the case you will receive this warning message.
                    Clicking 'Click here to fix this' will change your extension price to the same as your Steam
                    Wallet price and reload the page.</p>
                <img src='/img/release-notes/mass_listing_warning.jpg'
                     title='Mass Listing currency mismatch warning'
                     alt='Mass Listing currency mismatch warning'
                     className='showcaseImage'
                />
                <p>You will be able to see the progress by the quantities decreasing, lines getting stricken
                    through and items becoming greyed out.</p>
                <img src='/img/release-notes/mass_listing_in_progress.jpg'
                     title='Start the Mass Selling In Progress'
                     alt='Start the Mass Selling In Progress'
                     className='showcaseImage'
                />
            </Container>
            <Container className='buildingBlock' id='1.20'>
                <h2>1.20 - Incoming trade offers features</h2>
                <p>I have worked quite a bit on this and I think it ended up pretty nice and useful so I want as many
                    people to use it as possible.
                    Unfortunately to do so you have to add your Steam API key in the options first.
                    I tried solving this without that but it's not really possible to do so while offering appropriate
                    user experience.
                    If you don't have your API key set then all you will notice is a note on top of the trade offers
                    page advising to add your API key and linking to this page.</p>
                <p>These are the features that you are missing if you don't have it set:</p>
                <ul>
                    <li>Incoming offers summary showing the number of profitable offers and potential profit</li>
                    <li>Option to sort by profit, loss, received time, etc.</li>
                    <li>Prices, total per side, profit or loss per trade shown</li>
                    <li>Exteriors, doppler phases, colors, etc.</li>
                    <li>Float values in case they were loaded for those items previously</li>
                </ul>
                Illustrated in the bellow screenshot:
                    <img src='/img/release-notes/incomingoffersfeaturesfull_annotated.jpg'
                         title='Incoming offers features'
                         alt='Incoming offers features'
                         className='showcaseImage'
                    />
            </Container>
        </Fragment>
    );
};

export default releaseNotes;