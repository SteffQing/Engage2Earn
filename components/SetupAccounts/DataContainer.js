import H1 from "../ElementsTag/H1Tag";
import Close from "../../Icons/Close";
import Telegram from "../../Icons/Telegram";
import Twitter from "../../Icons/Twitter";
import Facebook from "../../Icons/Facebook";
import styles from "./Setup.module.css";
import useMediaQuery from "../../hooks/useMediaQueryhooks";
import P from "../ElementsTag/PTag";
export default function DataContainer() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <div className={styles.DataContainer}>
      {isMobile ? (
        data.map((value, i) => (
          <aside key={value.platform}>
            <div>
              <span>
                {value.icon}
                {value.platform}
              </span>
            </div>
            <div>
              <P content={headers[i]} />
              <div>
                <H1 content={value.account} />
                <P content={value.username} style={{ color: "#4C9BE8" }} />
              </div>
            </div>
            <div>
              <P content={headers[i + 1]} />
              <div>
                <H1 content={value.followers} />
                <P content={value.followersInc} />
              </div>
            </div>
            <div>
              <P content={headers[i + 2]} />
              <H1 content={value.activities} />
            </div>
            <div>
              <P content={headers[i + 3]} />
              <div>
                <H1 content={value.authenticity} />
                <P content={value.authenticityInc} />
              </div>
            </div>
            <div>
              <P content={headers[i + 4]} />
              {value.bound ? (
                <span className={styles.bind}>
                  <Close /> Unbind
                </span>
              ) : null}
            </div>
          </aside>
        ))
      ) : (
        <main>
          <aside>
            {headers.map((header) => (
              <div>{header}</div>
            ))}
          </aside>
          <section>
            {data.map((value) => (
              <aside key={value.platform}>
                <div>
                  <span>
                    {value.icon}
                    <P
                      content={value.platform}
                      style={{ fontSize: "12px", color: "#fff" }}
                    />
                  </span>
                </div>
                <div>
                  <div>
                    <H1 content={value.account} />
                    <P content={value.username} style={{ color: "#4C9BE8" }} />
                  </div>
                </div>
                <div>
                  <div>
                    {value.followers ? (
                      <H1 content={value.followers} />
                    ) : (
                      <H1 content="NA" style={{ color: "#6d7a86" }} />
                    )}
                    <P content={value.followersInc} />
                  </div>
                </div>
                <div>
                  <H1 content={value.activities} />
                </div>
                <div>
                  <div>
                    <H1 content={value.authenticity} />
                    <P content={value.authenticityInc} />
                  </div>
                </div>
                <div>
                  {value.bound ? (
                    <span className={styles.bind}>
                      <Close /> Unbind
                    </span>
                  ) : null}
                </div>
              </aside>
            ))}
          </section>
        </main>
      )}
    </div>
  );
}

let headers = [
  "platform",
  "account",
  "followers",
  "activities (24h)",
  "authenticity",
  "actions",
];
let data = [
  {
    icon: <Twitter />,
    platform: "twitter",
    account: "shola otitoju",
    profileImage: "/image.png",
    followers: 738,
    activities: 20,
    authenticity: "87.2%",
    bound: true,
    username: "@SholaOti",
    followersInc: "+12",
    authenticityInc: "+1.2%",
  },
  {
    icon: <Facebook />,
    platform: "facebook",
    account: "shola otitoju",
    profileImage: "/image.png",
    followers: 1412,
    activities: 32,
    authenticity: "75.6%",
    bound: true,
    username: "@SholaOti",
    followersInc: "+36",
    authenticityInc: "+0.7%",
  },
  {
    icon: <Telegram />,
    platform: "telegram",
    account: "shola otitoju",
    profileImage: "/image.png",
    followers: null,
    activities: 20,
    authenticity: "87.2%",
    bound: true,
    username: "@SholaOti",
    followersInc: null,
    authenticityInc: "+1.2%",
  },
];