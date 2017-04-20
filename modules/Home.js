import React, {Component} from 'react'
import {Col, Image, Jumbotron, Button, Well} from 'react-bootstrap'
import {Timeline, Follow} from 'react-twitter-widgets'

class Home extends Component{
  render() {
    return (
      <div id="home">
        <Jumbotron bsClass="jumbo jumbotron">
          <h1>Big News!</h1>
          <p>
            This is where you should put some of the latest updates that you'd like to call peoples' attention to.
            Link could be internal or external
          </p>
          <div>
            <Button bsStyle="primary">Learn more</Button>
          </div>
        </Jumbotron>

        <Col sm={6} md={4}>
          <h2 className="text-center">News</h2>
          <Image bsClass="center img" src="http://placecage.com/202/202" responsive circle />
          <p>That mortal man should feed upon the creature that feeds his lamp, and, like Stubb, \
            eat him by his own light, as you may say; this seems so outlandish a thing that one must needs
            go a little into the history and philosophy of it.</p>
          <p>It is upon record, that three centuries ago the tongue of the Right Whale was esteemed a
            great delicacy in France, and commanded large prices there. Also, that in Henry VIIIth’s time,
            a certain cook of the court obtained a handsome reward for inventing an admirable sauce to be eaten
            with barbacued porpoises, which, you remember, are a species of whale.</p>
          <p>Porpoises, indeed, are to this day considered fine eating. The meat is made into balls about the
            size of billiard balls, and being well seasoned and spiced might be taken for turtle-balls or veal balls.
            The old monks of Dunfermline were very fond of them. They had a great porpoise grant from the crown.</p>
        </Col>
        <Col sm={6} md={4}>
          <h2 className="text-center">Events</h2>
          <Image bsClass="center img" src="http://placecage.com/201/201" responsive circle />
          <p>The fact is, that among his hunters at least, the whale would by all hands be considered a noble dish,
            were there not so much of him; but when you come to sit down before a meat-pie nearly one hundred feet long,
            it takes away your appetite. Only the most unprejudiced of men like Stubb, nowadays partake of cooked whales;
            but the Esquimaux are not so fastidious. </p>
          <p>We all know how they live upon whales, and have rare old vintages of prime old train oil. Zogranda, one of
            their most famous doctors, recommends strips of blubber for infants, as being exceedingly juicy and nourishing.
            And this reminds me that certain Englishmen, who long ago were accidentally left in Greenland by a whaling
            vessel—that these men actually lived for several months on the mouldy scraps of whales which had been left
            ashore after trying out the blubber. </p>
          <p>Among the Dutch whalemen these scraps are called “fritters”; which, indeed, they greatly resemble,
            being brown and crisp, and smelling something like old Amsterdam housewives’ dough-nuts or oly-cooks,
            when fresh. They have such an eatable look that the most self-denying stranger can hardly keep his hands off.
          </p>
        </Col>
        <Col sm={6} md={4}>
          <Follow username="BaseTradeTV" />
          <Timeline
            dataSource={{sourceType: 'profile', screenName: 'BaseTradeTV'}}
            options={{height: '1000'}}
          />
        </Col>

        <Col sm={6} md={4}>
          <h2 className="text-center">Sponsors</h2>
          <Image bsClass="center img" src="http://placecage.com/203/203" responsive circle />
          <p>But what further depreciates the whale as a civilized dish, is his exceeding richness. He is the great
            prize ox of the sea, too fat to be delicately good. Look at his hump, which would be as fine eating as
            the buffalo’s (which is esteemed a rare dish), were it not such a solid pyramid of fat. </p>
          <p>But the spermaceti itself, how bland and creamy that is; like the transparent, half-jellied, white
            meat of a cocoanut in the third month of its growth, yet far too rich to supply a substitute for butter.
            Nevertheless, many whalemen have a method of absorbing it into some other substance, and then partaking of it.</p>
          <p>In the long try watches of the night it is a common thing for the seamen to dip their ship-biscuit into the
            huge oil-pots and let them fry there awhile. Many a good supper have I thus made.
          </p>
        </Col>

      </div>
    )
  }
}

export default Home
