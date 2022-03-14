import './CountryInfoCard.css'

function CountryInfoCard(props) {
    return (
        <div id='CountryInfoCardContainer'>
            <div className='CountryInfoCard'>
                <h1 className='CountryStrings' id='CountryTitle'>{props.countryInfo.Country}, {props.countryInfo.Continent}</h1>
            </div>

            <div className='CountryInfoCard'>
                <h3 className='CountryStrings' id='CountryCardTitle'>General info</h3>
                <div className='CountryMetaContainer'>
                    <div id='CountryMeta'>
                        <ul id='CountryMetaList'>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Total cases:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo["TotalCases"]}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>New cases:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo["NewCases"]}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Total deaths:</span>
                                <span className='CountryStrings' id='CountryMetaRed'>{props.countryInfo["TotalDeaths"]}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>New deaths:</span>
                                <span className='CountryStrings' id='CountryMetaRed'>{props.countryInfo["NewDeaths"]}</span>
                            </div>

                        </ul>
                    </div>
                    <div id='CountryMeta'>
                        <ul id='CountryMetaList'>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Total recovered:</span>
                                <span className='CountryStrings' id='CountryMetaRed'>{props.countryInfo["TotalRecovered"]}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>New recovered:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo["NewRecovered"]}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Recovery proportion:</span>
                                <span className='CountryStrings' id='CountryMetaRed'>{props.countryInfo["RecoveryProportion"]}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Population:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo["Population"]}</span>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='CountryInfoCard'>
                <h3 className='CountryStrings' id='CountryCardTitle'>Cases info</h3>
                <div className='CountryMetaContainer'>
                    <div id='CountryMeta'>
                        <ul id='CountryMetaList'>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Total cases:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo['TotalCases']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>New cases:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo['NewCases']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Active cases:</span>
                                <span className='CountryStrings' id='CountryMetaOrange'>{props.countryInfo['ActiveCases']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Infection risk:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo['InfectionRisk']}</span>
                            </div>

                        </ul>

                    </div>

                    <div id='CountryMeta'>

                        <ul id='CountryMetaList'>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>One case per X people:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo['OneCasePer']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Cases per 1M people:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo['CasesPerMil']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Critical cases:</span>
                                <span className='CountryStrings' id='CountryMetaOrange'>{props.countryInfo['CriticalCases']}</span>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='CountryInfoCard'>
                <h3 className='CountryStrings' id='CountryCardTitle'>Deaths info</h3>
                <div className='CountryMetaContainer'>
                    <div id='CountryMeta'>
                        <ul id='CountryMetaList'>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Total deaths:</span>
                                <span className='CountryStrings' id='CountryMetaRed'>{props.countryInfo['TotalDeaths']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>New deaths:</span>
                                <span className='CountryStrings' id='CountryMetaRed'>{props.countryInfo['NewDeaths']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Case fatality rate:</span>
                                <span className='CountryStrings' id='CountryMetaRed'>{props.countryInfo['CaseFatalityRate']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>One death per X people:</span>
                                <span className='CountryStrings' id='CountryMetaRed'>{props.countryInfo['OneDeathPer']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Deaths per 1M people:</span>
                                <span className='CountryStrings' id='CountryMetaRed'>{props.countryInfo['DeathPerMil']}</span>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='CountryInfoCard'>
                <h3 className='CountryStrings' id='CountryCardTitle'>Recovery info</h3>
                <div className='CountryMetaContainer'>
                    <div id='CountryMeta'>
                        <ul id='CountryMetaList'>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Total recovered:</span>
                                <span className='CountryStrings' id='CountryMetaOrange'>{props.countryInfo['TotalRecovered']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>New recovered:</span>
                                <span className='CountryStrings' id='CountryMetaOrange'>{props.countryInfo['NewRecovered']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Recovery proportion:</span>
                                <span className='CountryStrings' id='CountryMetaOrange'>{props.countryInfo['RecoveryProportion']}</span>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='CountryInfoCard'>
                <h3 className='CountryStrings' id='CountryCardTitle'>Test info</h3>
                <div className='CountryMetaContainer'>
                    <div id='CountryMeta'>
                        <ul id='CountryMetaList'>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Total tests:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo['TotalTests']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Test percentage:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo['TestPercentage']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>Test per 1M population:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo['TestsPerMil']}</span>
                            </div>

                            <div id='CountryMetaItem'>
                                <span className='CountryStrings'>One test per X people:</span>
                                <span className='CountryStrings' id='CountryMetaGreen'>{props.countryInfo['OneTestPer']}</span>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryInfoCard;