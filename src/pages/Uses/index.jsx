import React from 'react'
import Layout from '../../components/layout'
import Counter from '../../components/Counter'

class Uses extends React.Component {
    render() {
        
        return (
            <>
                <div>
                    <Counter />
                    <h1>What I Use:</h1>
                    <ol>
                        <li>Hardware
                            <ul>
                                <li>Macbook Pro: 2.5 GHz Quad-Core Intel Core i7</li>
                                <li>Windows: 2.5 GHz Quad-Core Intel Core i7</li>
                                <li><a href="https://en.wikipedia.org/wiki/Macintosh_LC_III" target="_blank">Macintosh: LC III</a>: 25MHz CPU, 4MB RAM, 80MB HD</li>
                            </ul>
                        </li>
                        <li>Editor/Terminal
                            <ul>
                                <li>Visual Studio Code</li>
                                <li>Visual Studio</li>
                                <li>iTerm (Mac) - with <a href="https://ohmyz.sh/" target="_blank">oh my zsh</a></li>
                                <li>Cmdr (Windows)</li>
                            </ul>
                        </li>
                        <li>CMS
                            <ul>
                                <li>Contentful</li>
                                <li>Episerver</li>
                                <li>Shopify</li>
                            </ul>
                        </li>
                        <li>Communication
                            <ul>
                                <li>Atlassian: JIRA, Confluence</li>
                                <li>Trello</li>
                                <li>Slack</li>
                                <li>MS Teams</li>
                                <li>Mattermost</li>
                            </ul>
                        </li>
                        <li>Code
                            <ul>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS/SCSS/LESS</li>
                                <li>Vue</li>
                                <li>React</li>
                                <li>Gatsby</li>
                                <li>Nuxt</li>
                            </ul>
                        </li>
                        <li>Fun
                            <ul>
                                <li><a href="https://www.huion.com/pen_display/KamvasPro/kamvas-pro-16.html" target="_blank">Huion Kamvas Pro 16 - drawing tablet.</a></li>
                                <li><a href="https://www.creality3dofficial.com/products/creality-ender-3-pro-3d-printer" target="_blank">Creality Ender 3 Pro</a> - 3D printer.</li>
                                <li><a href="https://matthewpalmer.net/rocket/" target="_blank">Rocket</a> - For enabling system wide emojis.</li>
                                <li><a href="https://www.blender.org/" target="_blank">Blender</a></li>
                                <li>MAME Cabinet</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </>
        )
    }
}

export default Uses