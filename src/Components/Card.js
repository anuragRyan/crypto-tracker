import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div>
          <div className='fs-1 fw-bold m-3 text-Capitalize'
          style={{fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important'}}>
            {this.props.coinName}
          </div>
          <section className='row m-1 mb-0 justify-content-evenly' style={{marginTop: '0px !important'}}>
            <div className='card text-white text-center  m-3'
              style={{width: '11rem', backgroundColor: "rgb(43, 43, 43)", marginTop: '0px !important'}}>
                <div className='card-body'>
                  <h6 className='card-title' style={{fontFamily: 'NHaasGroteskDSPro-65Md'}}>Market Cap 24Hrs</h6>
                  <p className='card-text fw-bold fs-5' style={{color: '#fcdf03'}}>{this.props.mCap24} %</p>
                </div>
            </div>

            <div className='card text-white text-center  m-3'
              style={{width:'11rem', backgroundColor: ' rgb(43, 43, 43)', marginTop: '0px !important'}}>
              <div className='card-body'>
                <h6 className='card-title' style={{fontFamily: 'NHaasGroteskDSPro-65Md'}}>All Time High</h6>
                <p className='card-text fw-bold fs-5' style={{color: '	#00FF00	'}}>₹ {this.props.ath}</p>
              </div>
            </div>

            <div className='card text-white text-center  m-3'
              style={{width: '11rem', backgroundColor: 'rgb(43, 43, 43)', marginTop: '0px !important'}}>
              <div className='card-body'>
                <h6 className='card-title' style={{fontFamily: 'NHaasGroteskDSPro-65Md'}}>Positive Sentiments</h6>
                <p className='card-text fw-bold fs-5' style={{color: '#fcdf03'}}>{this.props.marketSentiment} %</p>
              </div>
            </div>

            <div className='card text-white text-center  m-3'
              style={{width: '11rem', backgroundColor: 'rgb(43, 43, 43)', marginTop: '0px !important'}}>
              <div className='card-body'>
                <h6 className='card-title' style={{fontFamily: 'NHaasGroteskDSPro-65Md'}}>High 24Hrs</h6>
                <p className='card-text fw-bold fs-5' style={{color: '#00FF00	'}}>₹ {this.props.high24}</p>
              </div>
            </div>

            <div className='card text-white text-center  m-3'
              style={{width: '11rem', backgroundColor: 'rgb(43, 43, 43)', marginTop: '0px !important'}}>
              <div className='card-body'>
                <h6 className='card-title' style={{fontFamily: 'NHaasGroteskDSPro-65Md'}}>Low 24Hrs</h6>
                <p className='card-text fw-bold fs-5' style={{color: '#FF0000'}}>₹ {this.props.low24}</p>
              </div>
            </div>
            <div className='card text-white text-center  m-3'
              style={{width: '11rem', backgroundColor: 'rgb(43, 43, 43)', marginTop: '0px !important'}}>
              <div className='card-body'>
                <h6 className='card-title' style={{fontFamily: 'NHaasGroteskDSPro-65Md'}}>All Time Low</h6>
                <p className='card-text fw-bold fs-5' style={{color: '#FF0000'}}>₹ {this.props.low24}</p>
              </div>
            </div>
          </section>

          <div>
            <div className='text-white text-center'
              style={{fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '2px', marginTop: '1%'}}>
              Current Price
            </div>
            <div style={{
              fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '90px',
              fontWeight: '700', color: '#fcdf03', textDecoration: 'none solid rgb(255, 255, 255)',
              textAlign: 'center'
            }}>
              ₹ {this.props.currentPrice}
            </div>
          </div>
      </div>
    )
  }
}

export default Card;