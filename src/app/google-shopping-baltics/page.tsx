import Script from "next/script";
import "./page.css";

// The approved LP markup, carried over one-to-one from the standalone build.
// Everything renders inside .gsb so the page's generic class names (.card,
// .btn, .wrap, .section) cannot reach the site Header or the Webflow Footer.
const BODY = String.raw`
<!-- ========== 1. HERO ========== -->
  <section class="dark hero" aria-labelledby="hero-title">

    <div class="hero-body">
      <div class="hero-wrap">
      <div class="hero-grid">

        <div class="hero-copy">
      <!-- 1.5 H1 · white, sentence case, manual break after "Baltics" -->
      <h1 id="hero-title">Be among the<br><span class="accent-green">first Baltic stores<br>on Google Shopping</span></h1>

      <!-- 1.6 -->
      <p class="hero-lede">Google Shopping arrives in Lithuania, Latvia, and Estonia this holiday season. It puts your product photos and prices straight into the search results. We get your store ready to sell there from day one.</p>

      <!-- 1.8 -->
      <div class="hero-cta">
        <a class="hero-btn" href="#readiness-check" data-focus-form>Book a free readiness check</a>
      </div>

        </div>

        <!-- 1.4 HERO VISUAL. A before / after of the same search, built in CSS
             and inline SVG so the page stays one self-contained file. Same
             panel language as the listing card in WHAT IS COMING. -->
        <div class="hv-col">
          <div class="hv-panel" role="img" aria-label="The same search for sports T-shirts, before and after. Today a Baltic shopper sees only sponsored text links. With Google Shopping the results show product photos, prices, store names, and ratings.">

            <p class="label">Today &middot; text links only</p>
            <div class="hv-serp">
              <div class="hv-q"><span class="hv-goog" aria-hidden="true"><i style="color:#4285F4">G</i><i style="color:#EA4335">o</i><i style="color:#FBBC05">o</i><i style="color:#4285F4">g</i><i style="color:#34A853">l</i><i style="color:#EA4335">e</i></span><span class="hv-qt">sports T-shirts</span></div>
              <div class="hv-rows">
                <div class="hv-row">
                  <p class="hv-src">Sponsored &middot; teamsport.example</p>
                  <p class="hv-blue">Sports T-Shirts: Big Sale This Week</p>
                </div>
                <div class="hv-row">
                  <p class="hv-src">Sponsored &middot; activewear.example</p>
                  <p class="hv-blue">Best Sports T-Shirts 2026</p>
                </div>
              </div>
            </div>

            <p class="label hv-label-2">This season &middot; <span class="accent-green">Shopping cards</span></p>
            <div class="hv-serp hv-serp-after">
              <div class="hv-q"><span class="hv-goog" aria-hidden="true"><i style="color:#4285F4">G</i><i style="color:#EA4335">o</i><i style="color:#FBBC05">o</i><i style="color:#4285F4">g</i><i style="color:#34A853">l</i><i style="color:#EA4335">e</i></span><span class="hv-qt">sports T-shirts</span></div>
              <p class="hv-tag">Sponsored &middot; Shopping</p>
              <div class="hv-grid">
            <div class="hv-p">
              <div class="hv-pimg"><svg width="30" height="30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#E0603C" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="hv-pt">Performance Tee</p>
              <p class="hv-pp">&euro;18.99</p>
              <p class="hv-ps">teamsport.example</p>
              <p class="hv-ps"><span class="hv-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9734;</span> (412)</p>
            </div>
            <div class="hv-p">
              <div class="hv-pimg"><svg width="30" height="30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#3F4AAF" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="hv-pt">Pro Team Jersey</p>
              <p class="hv-pp">&euro;24.99</p>
              <p class="hv-ps">sportstore.example</p>
              <p class="hv-ps"><span class="hv-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span> (1.2k)</p>
            </div>
              </div>
            </div>

          </div>
        </div>

      </div><!-- /.hero-grid -->
      </div><!-- /.hero-wrap -->
    </div><!-- /.hero-body -->

    <!-- trust bar sits inside the hero section, as it does on k-12 -->
    <div class="trustbar" aria-label="scandiweb clients">
    <div class="gsb-wrap trustbar-in">
      <div class="trustbar-label">Trusted by 700+ leading brands worldwide</div>
      <div class="gsb-marquee" aria-label="Client logos">
        <div class="sw-marquee-track">
          <img src="/solutions/google-shopping-baltics/c024211616.svg" alt="PUMA" style="max-height:30px">
          <img src="/solutions/google-shopping-baltics/a4f2ef7c9d.png" alt="OM Digital Solutions / Olympus" style="max-height:24px">
          <img src="/solutions/google-shopping-baltics/6e05b9694b.png" alt="Boy Scouts of America" style="max-height:28px">
          <img src="/solutions/google-shopping-baltics/7d2f8fb5a7.svg" alt="The New York Times" style="max-height:22px">
          <img src="/solutions/google-shopping-baltics/8179a7ec0e.svg" alt="Samsung" style="max-height:22px">
          <img src="/solutions/google-shopping-baltics/0a5331e157.png" alt="Acer" style="max-height:22px">
          <img src="/solutions/google-shopping-baltics/d943da66f2.svg" alt="Adobe" style="max-height:22px">
          <img src="/solutions/google-shopping-baltics/c024211616.svg" alt="" aria-hidden="true" style="max-height:30px">
          <img src="/solutions/google-shopping-baltics/a4f2ef7c9d.png" alt="" aria-hidden="true" style="max-height:24px">
          <img src="/solutions/google-shopping-baltics/6e05b9694b.png" alt="" aria-hidden="true" style="max-height:28px">
          <img src="/solutions/google-shopping-baltics/7d2f8fb5a7.svg" alt="" aria-hidden="true" style="max-height:22px">
          <img src="/solutions/google-shopping-baltics/8179a7ec0e.svg" alt="" aria-hidden="true" style="max-height:22px">
          <img src="/solutions/google-shopping-baltics/0a5331e157.png" alt="" aria-hidden="true" style="max-height:22px">
          <img src="/solutions/google-shopping-baltics/d943da66f2.svg" alt="" aria-hidden="true" style="max-height:22px">
        </div>
        <div class="gsb-marquee-fade left" aria-hidden="true"></div>
        <div class="gsb-marquee-fade right" aria-hidden="true"></div>
      </div>
    </div>
  </div>
  </section>

  <!-- ========== 2b. BENEFIT BAND (sits under the trust bar) ========== -->

  <!-- ========== 3. WHAT CHANGES ========== -->
  <!-- ========== WHAT IS COMING ========== -->
  <section class="section section-solid" aria-labelledby="coming-title">
    <div class="gsb-wrap">
      <div class="split split-top split-coming">
        <div>
          <p class="eyebrow">What is coming</p>
          <h2 id="coming-title">Google Shopping puts your products<br><span class="accent-green">at the top of the search</span></h2>
          <div class="prose coming-prose" style="margin-top:24px">
            <p class="coming-news">Google Shopping reaches Lithuania, Latvia, and Estonia this holiday season, for the first time.</p>
            <p>Right now a Baltic shopper searching on Google sees text ads and blue links. With Shopping they will see the product itself, with your photo, your price, and your store name, right at the top of the page.</p>
            <p>Google will also add a Shopping tab, a whole page of nothing but products. People open it when they have already decided to buy and are choosing where. Your products can appear in both places, off the same product data.</p>
          </div>
        </div>

        <!-- An annotated Shopping result, built in CSS and inline SVG. This is the
             first time on the page a reader sees what they are actually buying. -->
        <!-- Same card pattern as the feed map in THE STAKE: a bordered panel,
             a label, the artefact, then a labelled set of chips. -->
        <!-- Both placements, built in CSS and inline SVG: the product row in the
             main results, and the Shopping tab. One feed feeds both. -->
        <div class="feedmap coming-panel" role="img" aria-label="The same search shown twice. In the main search results a row of product cards sits above the text links. In the Shopping tab the whole page is a grid of products. Both are built from the same product data.">
          <p class="label map-label map-label-first">In the search results</p>
          <div class="gs-page">
            <div class="gs-q"><span class="hv-goog" aria-hidden="true"><i style="color:#4285F4">G</i><i style="color:#EA4335">o</i><i style="color:#FBBC05">o</i><i style="color:#4285F4">g</i><i style="color:#34A853">l</i><i style="color:#EA4335">e</i></span><span class="gs-qt">sports T-shirts</span></div>
            <p class="gs-spon">Sponsored &middot; Shopping</p>
            <div class="gs-row">
            <div class="gs-mini">
              <div class="gs-mini-img"><svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#E0603C" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="gs-mini-t">Performance Tee</p>
              <p class="gs-mini-p">&euro;18.99</p>
            </div>
            <div class="gs-mini">
              <div class="gs-mini-img"><svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#3F4AAF" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="gs-mini-t">Pro Team Jersey</p>
              <p class="gs-mini-p">&euro;24.99</p>
            </div>
            <div class="gs-mini">
              <div class="gs-mini-img"><svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#2F8F5B" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="gs-mini-t">Active Training Tee</p>
              <p class="gs-mini-p">&euro;16.50</p>
            </div>
            </div>
            <div class="gs-links">
              <p class="gs-link-t">Sports T-Shirts: Big Sale This Week</p>
            </div>
          </div>

          <p class="label map-label">In the Shopping tab</p>
          <div class="gs-page">
            <div class="gs-navtabs"><span>All</span><span>Images</span><span class="on">Shopping</span></div>
            <div class="gs-tiles">
            <div class="gs-tile">
              <div class="gs-tile-img"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#E0603C" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="gs-tile-p">&euro;18.99</p>
            </div>
            <div class="gs-tile">
              <div class="gs-tile-img"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#3F4AAF" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="gs-tile-p">&euro;24.99</p>
            </div>
            <div class="gs-tile">
              <div class="gs-tile-img"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#2F8F5B" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="gs-tile-p">&euro;16.50</p>
            </div>
            <div class="gs-tile">
              <div class="gs-tile-img"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#E0603C" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="gs-tile-p">&euro;29.95</p>
            </div>
            <div class="gs-tile">
              <div class="gs-tile-img"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#3F4AAF" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="gs-tile-p">&euro;21.00</p>
            </div>
            <div class="gs-tile">
              <div class="gs-tile-img"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3 3 4.6l1 2.2 1-.5V13h6V6.3l1 .5 1-2.2L10 3a2 2 0 0 1-4 0Z" stroke="#2F8F5B" stroke-width="1.1" stroke-linejoin="round"/></svg></div>
              <p class="gs-tile-p">&euro;15.75</p>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="section section-stake" aria-labelledby="changes-title">
    <div class="gsb-wrap">
      <div class="split split-top split-stake">
        <div>
          <p class="eyebrow">How Google Shopping works</p>
          <h2 id="changes-title">Shopping runs on a product feed,<br><span class="accent-blue">and most Baltic stores don&rsquo;t have one yet</span></h2>
          <div class="prose" style="margin-top:24px">
            <p>A product feed is one file that lists everything you sell. It carries the photo, the price, the stock level, and the codes Google uses to match a product to a search. Every Shopping listing gets built from it.</p>
            <p>If you only sell in the Baltics, you&rsquo;ve never had a reason to build one, because there was nowhere to point it. If you already sell into Germany, Poland, or another market where Shopping runs, you probably have a feed there already. It needs Lithuania, Latvia, and Estonia added to it. Either way, that&rsquo;s the part we do.</p>
          </div>
          <p class="section-cta">
            <a href="#approach">See how we get your feed approved
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m6 3.5 5 4.5-5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </p>
        </div>

        <!-- No arrows: position alone carries the relationship, as on the
             omnichannel BI reference card. -->
        <div class="feedmap" role="img" aria-label="Google builds the listings that appear in search results, the Shopping tab, and Images from one product feed, which must carry the title, price, availability, gtin, google_product_category, and shipping fields">
          <p class="label map-label map-label-first">Where your products appear</p>
          <div class="chips">
            <span class="chip">Search results</span>
            <span class="chip">Shopping tab</span>
            <span class="chip">Images</span>
          </div>
          <div class="center-box">
            <strong>Your product feed</strong>
            <span>One structured file of your catalog</span>
          </div>
          <p class="label map-label">What the feed must carry</p>
          <div class="chips chips-6 chips-fields" style="row-gap:10px">
            <span class="chip">title</span>
            <span class="chip">price</span>
            <span class="chip">availability</span>
            <span class="chip">gtin</span>
            <span class="chip">google_product_category</span>
            <span class="chip">shipping</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== 4. THE WINDOW ========== -->
  <section class="section-solid timing" aria-labelledby="window-title">
    <div class="timing-split">
      <div class="timing-copy">
        <p class="eyebrow">The timing</p>
        <h2 id="window-title">Clicks <span class="accent-green">will never be cheaper</span> than the first months</h2>

        <ul class="timing-list">
          <li><svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 21V3m0 1h12l-2.8 3.8L17 12H5z" stroke="#6EF76E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Nobody is ahead of you yet</span></li>
          <li><svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12.6 3H21v8.4l-8.9 8.9a1.5 1.5 0 0 1-2.1 0l-6.3-6.3a1.5 1.5 0 0 1 0-2.1Z" stroke="#6EF76E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16.9" cy="7.1" r="1.5" stroke="#6EF76E" stroke-width="1.5"/></svg><span>Clicks start cheap</span></li>
          <li><svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20V5m0 0-6.5 6.5M12 5l6.5 6.5" stroke="#6EF76E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>The sooner you start, the more Google shows you</span></li>
        </ul>

        <p class="timing-cta"><a class="btn btn-white" href="#readiness-check" data-focus-form>Book a free readiness check</a></p>
      </div>

      <div class="timing-media">
        <img src="/solutions/google-shopping-baltics/ac6085dd19.webp" alt="">
      </div>
    </div>
  </section>

    <!-- ========== 6. OUR APPROACH ========== -->
  <section id="approach" class="section section-tight" aria-labelledby="approach-title">
    <div class="gsb-wrap">
      <p class="eyebrow">What we do</p>
      <h2 id="approach-title" style="max-width:900px">We get your feed approved<br><span class="accent-blue">and hand it over ready to sell</span></h2>

      <div class="phases">
        <div class="card phase">
          <span class="badge">Phase 1</span>
          <h3>Before go-live</h3>
          <p class="label">What we do</p>
          <ul class="checklist on-light">
              <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Set up or audit your Google Merchant Center and product feed</span></li>
              <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Write titles and descriptions for Lithuania, Latvia, and Estonia</span></li>
              <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Wire the feed into your store, on any platform, so it updates itself</span></li>
              <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Clear disapprovals, attribute gaps, and policy blockers</span></li>
              <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Set up a Comparison Shopping Service partner so your clicks cost&nbsp;less</span></li>
          </ul>
          <div class="outcome">
            <span class="label">Outcome</span>
            <strong>Your catalog is approved and selling from the first day Shopping is live</strong>
          </div>
        </div>

        <div class="card phase">
          <span class="badge">Phase 2</span>
          <h3>After go-live</h3>
          <p class="label">What we do</p>
          <ul class="checklist on-light">
              <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>We stay on for 30 days</span></li>
              <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Answer anything that comes up as your first campaigns run</span></li>
              <li><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Check the feed is still approved and serving</span></li>
          </ul>
          <div class="outcome">
            <span class="label">Outcome</span>
            <strong>You go into the first weeks with someone to ask</strong>
          </div>
        </div>
      </div>

      <div class="note">
        <span class="label">Important note</span>
        <p>This covers product data and feeds. Campaign management and bidding run as a separate engagement.</p>
      </div>

    </div>
  </section>

  <!-- ========== 7. BLUE CTA STRIP ========== -->

  <!-- ========== 8. PROOF ========== -->
  <section class="section dark" aria-labelledby="proof-title">
    <div class="gsb-wrap">
      <div class="proof-head">
        <p class="eyebrow">Proven with</p>
        <img class="proof-logo" src="/solutions/google-shopping-baltics/76468ce163.webp" alt="Laithwaites">
      </div>

      <h2 id="proof-title" style="max-width:900px">Rebuilding one product feed<br><span class="accent-green">and the numbers kept climbing</span></h2>

      <div class="proof-grid">
        <div>
          <p class="lede" style="max-width:900px">Laithwaites sells wine direct to consumers and runs the WSJ Wine Club. Their product feed was holding the ads back, so we rebuilt it and kept optimizing.</p>

          <!--
            VERIFY BEFORE PUBLISH: these four figures come from an internal sales deck
            and have not been checked against a primary source. Confirm all four against
            the published case study before this page goes live.
          -->
          <div class="grid g4" style="margin-top:40px">
            <div class="card stat">
              <p class="num">+2000%</p>
              <p class="cap">Product impressions, now over 8 million a month</p>
            </div>
            <div class="card stat">
              <p class="num">+683%</p>
              <p class="cap">Items purchased on ads</p>
            </div>
            <div class="card stat">
              <p class="num">+731%</p>
              <p class="cap">Revenue from ads</p>
            </div>
            <div class="stat-stack">
              <img class="stat-shot" src="/solutions/google-shopping-baltics/10d10b6ec7.webp"
                   alt="Three wine bottles, green, white, and red">
              <div class="card stat">
                <p class="num">4.4x</p>
              <p class="cap">Return on ad spend</p>
              </div>
            </div>
          </div>

          <div class="proof-bar">
            <p>Numbers like these come from getting the product data right. Let&rsquo;s see what your catalog needs before the Baltics open.</p>
            <a class="btn btn-white" href="#readiness-check" data-focus-form>Book a free readiness check</a>
          </div>

          <!--
            CASE STUDY LINK OMITTED. scandiweb.com/case-studies/laithwaites,
            /portfolio/laithwaites and /cases/laithwaites all return 404, and the brief
            says to leave the link out rather than point at a placeholder. Add it here
            once the portfolio item exists.
          -->

        </div>

      </div>
    </div>
  </section>

  <!-- ========== 9. THE OFFER ========== -->
  <section class="section" id="offer" aria-labelledby="offer-title">
    <div class="gsb-wrap">
      <p class="eyebrow">The offer</p>
      <h2 id="offer-title">Your launch-ready feed at <span class="accent-blue">a fixed price</span></h2>

      <div class="offer-grid" style="margin-top:40px">
        <div class="pricecard">
          <p class="figure">
            <span class="amount">&euro;1,200</span>
            <span class="unit">fixed setup fee</span>
          </p>
          <p class="sub">One fee for your first Google Shopping feed. We build it, get it through review, and hand it over ready to sell.</p>
        </div>

        <div>
          <p class="label">What is included</p>
          <ul class="checklist on-light" style="margin-top:16px">
            <li>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>Google Merchant Center and product feed setup, built to the Shopping specification</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>Feed optimization and enriched product attributes for Lithuania, Latvia, and Estonia</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m3 9.4 3.6 3.6L15 4.6" stroke="#3F4AAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>Clearing disapprovals until your catalog is approved and launch-ready</span>
            </li>
          </ul>
          <div class="note">
            <span class="label">Scope</span>
            <p>The fee covers feed setup and optimization. Campaign management and bidding strategy run as a separate engagement.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== 10. HOW WE START ========== -->

  <!-- ========== 11. FAQ ========== -->

  <!-- ========== 12. CLOSING FORM ========== -->
  <section class="section dark" id="contact" aria-labelledby="contact-title">
    <div class="gsb-wrap">
      <div class="form-split">
        <div>
          <h2 id="contact-title">Get your feed ready before <span class="accent-green">the Baltic market opens</span></h2>

                    <ol class="steplist">
            <li>
              <span class="num-circle" aria-hidden="true">1</span>
              <span>Book a 30-minute call</span>
            </li>
            <li>
              <span class="num-circle" aria-hidden="true">2</span>
              <span>Share your Merchant Center access, if you have it</span>
            </li>
            <li>
              <span class="num-circle" aria-hidden="true">3</span>
              <span>We come back with a launch plan</span>
            </li>
            <li>
              <span class="num-circle" aria-hidden="true">4</span>
              <span>We build your feed, ready for the Baltic launch</span>
            </li>
          </ol>

          <div class="contact">
            <img class="avatar" src="/solutions/google-shopping-baltics/58e97309eb.webp" alt="Nika Zhgheria" width="80" height="80">
            <div>
              <p class="nm">Nika Zhgheria</p>
              <p class="role">Paid Media Business Developer</p>
              <p class="em"><a href="mailto:nika.zhgheria@scandiweb.com">nika.zhgheria@scandiweb.com</a></p>
            </div>
          </div>
        </div>

        <div id="readiness-check">
          <!-- Calendly inline widget begin -->
          <div class="calendly-inline-widget" data-url="https://calendly.com/nika-zhgheria-scandiweb/chatgpt-ads?hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;primary_color=3F4AAF" style="min-width:320px;height:700px;"></div>
          <!-- Calendly inline widget end -->
        </div>
      </div>
    </div>
  </section>
`;

export default function Page() {
  return (
    <>
      <main className="gsb" dangerouslySetInnerHTML={{ __html: BODY }} />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
