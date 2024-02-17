import Image from "next/image";
import styles from "./page.module.css";

function classNames(...args) {
  return args.join(" ");
}

export default function Home() {
  return (
    <div className={styles.outter}>
      <header className={styles.header}>
        <Image src={"/logo.svg"} width={157} height={28} alt="citizen remote" priority={true} loading="eager" />
        <div className={styles.steps_container}>
          <span className={styles.step}></span>
          <span className={styles.step}></span>
          <span className={classNames(styles.step, styles.active)}></span>
          <span className={styles.step}></span>
        </div>
        <div style={{ width: "157px", height: "28px" }}></div>
      </header>
      <div className={styles.container}>
        <div className={classNames("column", styles.content)}>
          <div className={classNames("column", styles.title)}>
            <h3>Traveling Members</h3>
            <p>Are you traveling alone or with someone else?</p>
          </div>
          <div className={classNames("column", styles.members_content)}>
            <div className={classNames("column", styles.tabs)}>
              <button className={styles.btn}>Alone</button>
              <button className={classNames(styles.btn, styles.active)}>
                With others
              </button>
            </div>
            <div className={classNames("column", styles.travel_members)}>
              <div className={styles.head}>
                <Image
                  src={"/members.svg"}
                  width={20}
                  height={20}
                  alt="members logo"
                />
                <p>Travelling members</p>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.member_details}>
                <div className={classNames("column", styles.name)}>
                  <p className={styles.rel}>Legal Spouse</p>
                  <p className={styles.con}>Must have marrige certificate</p>
                </div>
                <div className={styles.actions}>
                  <button className={styles.btn}>
                    <Image
                      src={"/minus.svg"}
                      width={20}
                      height={20}
                      alt="minus"
                    />
                  </button>
                  <p className={styles.count}>1</p>
                  <button className={styles.btn}>
                    <Image
                      src={"/plus.svg"}
                      width={20}
                      height={20}
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.member_details}>
                <div className={classNames("column", styles.name)}>
                  <p className={styles.rel}>Children under 18</p>
                  <p className={styles.con}>Must have birth certificate</p>
                </div>
                <div className={styles.actions}>
                  <button className={styles.btn}>
                    <Image
                      src={"/minus.svg"}
                      width={20}
                      height={20}
                      alt="minus"
                    />
                  </button>
                  <p className={styles.count}>2</p>
                  <button className={styles.btn}>
                    <Image
                      src={"/plus.svg"}
                      width={20}
                      height={20}
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.member_details}>
                <div className={classNames("column", styles.name)}>
                  <p className={styles.rel}>Pets</p>
                  <p className={styles.con}>Must have documents</p>
                </div>
                <div className={styles.actions}>
                  <button className={styles.btn}>
                    <Image
                      src={"/minus.svg"}
                      width={20}
                      height={20}
                      alt="minus"
                    />
                  </button>
                  <p className={styles.count}>5</p>
                  <button className={styles.btn}>
                    <Image
                      src={"/plus.svg"}
                      width={20}
                      height={20}
                      alt="plus"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom_bar}>
            <a className={styles.back_link}>
              <Image src={"arrow-left.svg"} width={20} height={20} alt="arrow left"/>
              <p>Back</p>
            </a>
            <button className={styles.continue_btn}>Continue</button>
          </div>
        </div>
        <div className={styles.card_container}>
          <div
            className={styles.travel_card}
            style={{ backgroundImage: "url(bg.webp)" }}
          >
            <div className={styles.travel_card_items}>
              <div className={styles.travel_users}>
                <Image src={"/ft.svg"} width={48} height={48} alt="FT" />
                <div className="column">
                  <p className={styles.travel_title}>Fellow Traveler</p>
                  <p className={styles.travel_email}>traveleremail@gmail.com</p>
                </div>
              </div>
              <div className={styles.passports}>
                <Image
                  src={"/germany.svg"}
                  width={32}
                  height={32}
                  alt="Germany"
                />
                <Image
                  src={"/ukrain.svg"}
                  width={32}
                  height={32}
                  alt="Ukraine"
                />
              </div>
            </div>
            <div className={styles.info_card}>
              <div className={styles.card_item_title}>
                <p>Finance Information</p>
                <div className={styles.line} />
              </div>
              <div className={styles.list_item}>
                <p className={styles.key}>Full Remote Job</p>
                <p className={styles.val}>Yes, for over 6 months.</p>
              </div>
              <div className={styles.list_item}>
                <p className={styles.key}>Self employed</p>
                <p className={styles.val}>
                  {"I'm self employed < 3 years business"}
                </p>
              </div>
              <div className={styles.money_cards}>
                <div className={styles.card}>
                  <p className={styles.key}>Income</p>
                  <p className={styles.val}>$1,000</p>
                </div>
                <div className={styles.card}>
                  <p className={styles.key}>Savings</p>
                  <p className={styles.val}>$10,000</p>
                </div>
              </div>
              <div className={styles.divider} />
              <div className={styles.card_item_title}>
                <p>Traveling Members</p>
                <div className={styles.line} />
              </div>
              <div className={styles.travling_list}>
                <div className={styles.travel_item}>
                  <p className={styles.amount}>1</p>
                  <p className={styles.name}>Legal Spouce</p>
                </div>
                <div className={styles.travel_item}>
                  <p className={styles.amount}>2</p>
                  <p className={styles.name}>Children under 18</p>
                </div>
                <div className={styles.travel_item}>
                  <p className={styles.amount}>5</p>
                  <p className={styles.name}>Pets</p>
                </div>
              </div>
              <div className={styles.divider} />
              <div className={styles.card_item_title}>
                <p>Additions</p>
                <div className={styles.line} />
              </div>
              <Image src={"/placeholder.svg"} width={165} height={20} alt="placeholder" style={{ padding: "0px 20px" }} />
            </div>
            <p className={styles.bottom_text}>Personal Travel Card by Citizen Remote</p>
          </div>
        </div>
      </div>
    </div>
  );
}
