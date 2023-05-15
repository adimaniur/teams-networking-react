import { SideMenu } from "../menu/SideMenu";
import { TeamsTableWrapper } from "../teams/Table";

export function Content() {
  return (
    <section className="main">
      <div className="container">
        <SideMenu />
        <div className="content">
          <div className="page" id="home">
            <h3>Did you find peace?</h3>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
              horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown
              belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it
              and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest
              of him, waved about helplessly as he looked.
            </p>

            <p>
              "What's happened to me? " he thought. It wasn't a dream. His room, a proper human room although a little
              too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out
              on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently
              cut out of an illustrated magazine and housed in a nice, gilded frame.
            </p>

            <p>
              It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that
              covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the
              dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. "How about if
              I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was
              unable to do because he was used to sleeping on his right, and in his present state couldn't get into that
              position.
            </p>

            <p>
              However hard he threw himself onto his right, he always rolled back to where he was. He must have tried it
              a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped
              when he began to feel a mild, dull pain there that he had never felt before. "Oh, God", he thought, "what
              a strenuous career it is that I've chosen! Travelling day in and day out.
            </p>

            <h3>Getting up early</h3>

            <p>
              Doing business like this takes much more effort than doing your own business at home, and on top of that
              there's the curse of travelling, worries about making train connections, bad and irregular food, contact
              with different people all the time so that you can never get to know anyone or become friendly with them.
              It can all go to Hell! " He felt a slight itch up on his belly; pushed himself slowly up on his back
              towards the headboard so that he could lift his head better; found where the itch was, and saw that it was
              covered with lots of little white spots which he didn't know what to make of; and when he tried to feel
              the place with one of his legs he drew it quickly back because as soon as he touched it he was overcome by
              a cold shudder. He slid back into his former position. "Getting up early all the time", he thought, "it
              makes you stupid. You've got
            </p>
          </div>
          <div className="page" id="skills">
            <h3>Learning right now</h3>
            <ul>
              <li className="js">
                <div className="percent">
                  <span>js</span>
                </div>
              </li>
            </ul>
            <h3>My skills</h3>
            <ul>
              <li className="css3">
                <div className="percent">
                  <span>css3</span>
                </div>
              </li>
              <li className="html5">
                <div className="percent">
                  <span>html5</span>
                </div>
              </li>
              <li className="illustrator">
                <div className="percent">
                  <span>illustrator</span>
                </div>
              </li>
              <li className="photoshop">
                <div className="percent">
                  <span>photoshop</span>
                </div>
              </li>
              <li className="sass">
                <div className="percent">
                  <span>sass</span>
                </div>
              </li>
            </ul>
            <h3>Good at</h3>
            <ul>
              <li className="details">
                <div className="percent">
                  <span>attention to detalis</span>
                </div>
              </li>
              <li className="responsive">
                <div className="percent">
                  <span>responsive design</span>
                </div>
              </li>
              <li className="team">
                <div className="percent">
                  <span>team spirit</span>
                </div>
              </li>
              <li className="time">
                <div className="percent">
                  <span>time management</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="page" id="teams" style={{ display: "block" }}>
            <h3>Teams</h3>
            <TeamsTableWrapper />
          </div>
          <div className="page" id="languages">
            <h3>Languages</h3>
            <p>
              "What's happened to me? " he thought. It wasn't a dream. His room, a proper human room although a little
              too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out
              on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently
              cut out of an illustrated magazine and housed in a nice, gilded frame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
