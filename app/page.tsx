"use client";

import styles from "./page.module.css";
import ScalingSection from "../app/components/scaling";
// import Link from "next/link";
import "../app/components/button.css";
import {get_team} from "../app/components/get_team";

export default function Home() {
  
  return (
    <main className={styles.main}>

      <ScalingSection>
        <div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h1>Floors</h1>
              <p>
                {get_team("floors")}
              </p>
            </div>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h1>Waste</h1>
              <p>
                {get_team("waste")}
              </p>
            </div>
          </div>
        </div>
      </ScalingSection>

      <ScalingSection>
        <div>
          <div className={styles.section}>
            <div className={styles.text}>
              <h1>Kitchen</h1>
              <p>
                {get_team("kitchen")}
              </p>
            </div>
          </div>
        </div>
      </ScalingSection>

    </main>
    );
}
