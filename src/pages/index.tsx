import './styles.module.css'

import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styled from '@emotion/styled'
import {
  BookOpenIcon,
  ChatIcon,
  CodeIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline'
import Discord from '@site/static/img/discord.svg'
import UGP from '@site/static/img/UGP.png'
import Layout from '@theme/Layout'
import ThemedImage from '@theme/ThemedImage'
import { TraceEvent } from '@uniswap/analytics'
import {
  BrowserEvent,
  DocsHomepageElementName as ElementName,
  DocsSectionName as SectionName,
  EventName,
} from '@uniswap/analytics-events'
import React from 'react'
import { ArrowUpRight as LinkIcon, GitHub } from 'react-feather'

import SearchBarWithAnalytics from '../theme/SearchBar'

export const actions = [
  {
    title: 'What is Uniswap',
    href: '#',
    icon: InformationCircleIcon,
    to: './concepts/overview',
    text: `Learn about the core concepts of the Uniswap Protocol. Swaps, Pools, Concentrated Liquidity and more.`,
    name: ElementName.WHAT_IS_UNISWAP,
  },
  {
    title: 'Integrate with Uniswap',
    href: '#',
    icon: QuestionMarkCircleIcon,
    to: './sdk/v3/overview',
    text: `Learn how to integrate with Uniswap through guided examples to power your dApp.`,
    name: ElementName.V3_SDK,
  },
  {
    title: 'The Uniswap smart contracts',
    href: '#',
    icon: BookOpenIcon,
    to: './contracts/v3/overview',
    text: `Learn about the architecture of the Uniswap Protocol smart contracts through guided examples.`,
    name: ElementName.SMART_CONTRACT_OVERVIEW,
  },
]

export const developerLinks = [
  {
    title: 'uniswap-v3-core',
    href: 'https://github.com/Uniswap/uniswap-v3-core',
    icon: CodeIcon,
    name: ElementName.V3_CORE,
  },
  {
    title: 'uniswap-v3-sdk',
    href: 'https://github.com/Uniswap/uniswap-v3-sdk',
    icon: CodeIcon,
    name: ElementName.V3_SDK,
  },
  {
    title: 'uniswap-v3-periphery',
    href: 'https://github.com/Uniswap/uniswap-v3-periphery',
    icon: CodeIcon,
    name: ElementName.V3_PERIPHERY,
  },
  {
    title: 'Deployment addresses',
    href: 'https://github.com/Uniswap/uniswap-v3-periphery/blob/main/deploys.md',
    name: ElementName.V3_CONTRACT_ADDRESS,
  },
  {
    title: '@uniswap/widgets',
    href: 'https://www.npmjs.com/package/@uniswap/widgets',
    icon: CodeIcon,
    name: ElementName.V3_WIDGETS,
  },
]

export const dAppGuides = [
  {
    title: 'Setup your environment',
    text: 'Prepare your local environment by installing the required dependencies',
    to: './sdk/v3/guides/quick-start',
    name: ElementName.SDK_QUICK_START,
  },
  {
    title: 'Fetch token prices',
    text: 'Fetch the price of tokens in a specific Pool',
    to: './sdk/v3/guides/fetching-prices',
    name: ElementName.PROVIDE_LIQUIDITY,
  },
  {
    title: 'Create a Trade',
    text: 'Fetch a Quote for a Trade and execute the Trade',
    to: './sdk/v3/guides/creating-a-trade',
    name: ElementName.BUILD_ORACLE,
  },
  {
    title: 'Route trades',
    text: 'Use Routing to get optimized prices for your Trades',
    to: './sdk/v3/guides/auto-router',
    name: ElementName.IMPLEMENT_SWAP,
  },
  {
    title: 'Provide liquidity',
    text: "Contribute to a Pool's liquidity by using tokens to earn fees",
    to: './sdk/v3/guides/liquidity/minting',
    name: ElementName.IMPLEMENT_SWAP,
  },
  {
    title: 'UI Component',
    text: 'Integrate with the Swap Widget, a React component that works out of the box ',
    to: './sdk/swap-widget/overview',
    name: ElementName.EMBED_SWAP_WIDGET,
  },
]
export const smartContractGuides = [
  {
    title: 'Setup your environment',
    text: 'Prepare your local environment by installing the required dependencies',
    to: './contracts/v3/guides/local-environment',
    name: ElementName.SDK_QUICK_START,
  },
  {
    title: 'Implement a Swap',
    text: 'Start swapping from a smart contract in Solidity',
    to: './contracts/v3/guides/swaps/single-swaps',
    name: ElementName.EMBED_SWAP_WIDGET,
  },
  {
    title: 'Provide Liquidity',
    text: 'Provide liquidity from a smart contract in Solidity',
    to: '.contracts/v3/guides/providing-liquidity/setting-up',
    name: ElementName.PROVIDE_LIQUIDITY,
  },
  {
    title: 'Mine Liquidity',
    text: 'Start Mining liquidity from a smart contract in Solidity',
    to: './contracts/v3/guides/liquidity-mining/overview',
    name: ElementName.BUILD_ORACLE,
  },
  {
    title: 'Implement Flash Swaps',
    text: 'Implement Flash Swaps from a smart contract in Solidity',
    to: './contracts/v3/guides/flash-integrations/inheritance-constructors',
    name: ElementName.IMPLEMENT_SWAP,
  },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const TwoRow = styled(Row)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: flex;
  max-height: 250px;
  min-width: 350px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

const CenterCard = styled(Card)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0px;
  }
`

const ShadowCard = styled(Card)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  min-height: 200px;
  /* background-color: var(--ifm-color-emphasis-0); */
`

const WideCard = styled(ShadowCard)`
  max-height: auto;

  @media (max-width: 960px) {
    margin: 0 2rem;
    max-height: fit-content;
    width: fit-content;
  }
`

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`

const TopSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black !important;
  }
`

const DocsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`

const StyledImage = styled(ThemedImage)`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;
`

const StyledTitleImage = styled(StyledImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  opacity: 0.2;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
`

const StyledGithubIcon = styled(GitHub)`
  svg {
    fill: var(--ifm-font-color-base);
  }
`

const StyledLinkIcon = styled(LinkIcon)`
  svg {
    fill: var(--ifm-font-color-base);
  }
`

const HideMedium = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`

export default function Home() {
  return (
    <Layout title={`Uniswap Docs`} description="Technical Documentation For The Uniswap Protocol">
      <Container>
        <DocsHeader>
          <div
            style={{
              padding: '4rem 0  ',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 style={{ fontWeight: 600 }}> Welcome to the Uniswap Docs</h1>
            <HideMedium>
              <SearchBarWithAnalytics />
            </HideMedium>
          </div>
          <StyledTitleImage
            alt="Docusaurus themed image"
            sources={{
              light: useBaseUrl('/img/grow.png'),
              dark: useBaseUrl('/img/grow2.png'),
            }}
          />
          <Row>
            {actions.map((action) => (
              <TraceEvent
                key={action.name}
                element={action.name}
                events={[BrowserEvent.onClick]}
                name={EventName.PAGE_CLICKED}
                section={SectionName.WELCOME_LINKS}
              >
                <Link style={{ textDecoration: 'none' }} to={action.to}>
                  <ShadowCard key={action.title}>
                    <TopSection>
                      <IconWrapper>
                        <action.icon style={{ width: '24px' }} />
                      </IconWrapper>
                      <StyledLinkIcon />
                    </TopSection>
                    <h3 style={{ marginBottom: '.75rem', fontWeight: 500 }}>{action.title}</h3>
                    <p style={{ marginBottom: '0.5rem', fontWeight: 300 }}>{action.text}</p>
                  </ShadowCard>
                </Link>
              </TraceEvent>
            ))}
          </Row>
        </DocsHeader>
        <TwoRow
          style={{
            gap: '56px',
            marginTop: '4rem',
          }}
        >
          <div>
            <h2>Integrate your dApp</h2>
            <p>Explore these guided tutorials to get started integrating with Uniswap in your dApp.</p>
            <div>
              {dAppGuides.map((action) => (
                <TraceEvent
                  key={action.name}
                  element={action.name}
                  events={[BrowserEvent.onClick]}
                  name={EventName.PAGE_CLICKED}
                  section={SectionName.DEVELOPER_LINKS}
                >
                  <Link style={{ textDecoration: 'none' }} key={action.title} to={action.to}>
                    <Card key={action.title} style={{ marginBottom: '1rem' }}>
                      <LinkRow>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <h3 style={{ marginBottom: '0rem' }}>{action.title}</h3>
                        </div>
                        <StyledLinkIcon />
                      </LinkRow>
                      <p style={{ marginBottom: '0rem', fontWeight: 300 }}>{action.text}</p>
                    </Card>
                  </Link>
                </TraceEvent>
              ))}
            </div>
          </div>
          <div>
            <h2>Integrate your smart contacts</h2>
            <p>Explore these guided tutorials to get started integrating with Uniswap in your smart contracts.</p>
            <div>
              {smartContractGuides.map((action) => (
                <TraceEvent
                  key={action.name}
                  element={action.name}
                  events={[BrowserEvent.onClick]}
                  name={EventName.PAGE_CLICKED}
                  section={SectionName.DEVELOPER_LINKS}
                >
                  <Link style={{ textDecoration: 'none' }} key={action.title} to={action.to}>
                    <Card key={action.title} style={{ marginBottom: '1rem' }}>
                      <LinkRow>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <h3 style={{ marginBottom: '0rem' }}>{action.title}</h3>
                        </div>
                        <StyledLinkIcon />
                      </LinkRow>
                      <p style={{ marginBottom: '0rem', fontWeight: 300 }}>{action.text}</p>
                    </Card>
                  </Link>
                </TraceEvent>
              ))}
            </div>
          </div>
        </TwoRow>
        <hr />
        <TwoRow
          style={{
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <StyledImage
            style={{ maxHeight: '400px' }}
            sources={{
              light: useBaseUrl('/img/use.png'),
              dark: useBaseUrl('/img/use2.png'),
            }}
          />
          <div>
            <h2>Developer Links</h2>
            {developerLinks.map((action) => (
              <TraceEvent
                key={action.name}
                name={EventName.PAGE_CLICKED}
                element={action.name}
                events={[BrowserEvent.onClick]}
                section={SectionName.DEVELOPER_LINKS}
              >
                <Link style={{}} to={action.to}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <StyledGithubIcon />
                    <h3 style={{ fontWeight: 300 }}>{action.title}</h3>
                  </div>
                </Link>
              </TraceEvent>
            ))}
          </div>
        </TwoRow>
        <hr />
        <Row>
          <TraceEvent
            events={[BrowserEvent.onClick]}
            element={ElementName.DISCORD}
            section={SectionName.BOTTOM_MENU_LINKS}
            name={EventName.PAGE_CLICKED}
          >
            <Link style={{ textDecoration: 'none' }} href={'https://discord.gg/ybKVQUWb4s'}>
              <CenterCard>
                <Discord style={{ width: '48px', height: '48px' }} />
                <div>
                  <h3>Discord</h3>
                  <p>Hop in to the #dev-chat to get realtime help.</p>
                </div>
              </CenterCard>
            </Link>
          </TraceEvent>
          <TraceEvent
            events={[BrowserEvent.onClick]}
            element={ElementName.GRANTS}
            section={SectionName.BOTTOM_MENU_LINKS}
            name={EventName.PAGE_CLICKED}
          >
            <Link style={{ textDecoration: 'none' }} href={'https://gov.uniswap.org/'}>
              <CenterCard>
                <ChatIcon style={{ width: '48px', height: '48px' }} />
                <div>
                  <h3>Forum</h3>
                  <p>Discuss governance and more.</p>
                </div>
              </CenterCard>
            </Link>
          </TraceEvent>
          <TraceEvent
            events={[BrowserEvent.onClick]}
            section={SectionName.BOTTOM_MENU_LINKS}
            element={ElementName.GITHUB}
            name={EventName.PAGE_CLICKED}
          >
            <Link style={{ textDecoration: 'none' }} href={'https://github.com/Uniswap'}>
              <CenterCard>
                <StyledGithubIcon />
                <div>
                  <h3>GitHub</h3>
                  <p>View all Uniswap repositories.</p>
                </div>
              </CenterCard>
            </Link>
          </TraceEvent>
        </Row>
        <Link
          style={{
            textDecoration: 'none',
            maxWidth: '960px',
            margin: '0 auto 4rem auto',
            width: '100%',
          }}
          href={'https://unigrants.org/'}
        >
          <WideCard
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            <img src={UGP} width={'120px'} />
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>Uniswap Grants Program</h2>
              <p style={{ margin: '0rem' }}>
                Uniswap Governance offers grant funding for people who are building apps, tools, and activities for
                Uniswap Protocol users, builders, and community members.{' '}
              </p>
            </div>
          </WideCard>
        </Link>
      </Container>
    </Layout>
  )
}
