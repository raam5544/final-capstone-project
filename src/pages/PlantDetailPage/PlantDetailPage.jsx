import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './PlantDetailPage.module.css';
import { createRoutesFromChildren } from 'react-router-dom';
import ReactLoading from "react-loading";


function News() {

    const [data, setData] = useState(null)

    const [select, setSelect] = useState('world')

    const [subselect, setSubselect] = useState('')

    const [count, setCount] = useState(1)

    const handleInc = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handleDec = () => {
        setCount(count - 1)
        console.log(count)
    }

    const fetchData = async () => {
        const apiKey = 'sk-h2AN65a5481dbf1653787'
        const url = `https://perenual.com/api/species-list?key=${apiKey}&page=${count}`
        const response = await fetch(url)
        const fetchedData = await response.json()
        console.log(fetchedData)
        setData(fetchedData)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchData()
    }, [count])

    const clickMe = () => {
        fetchData()
    }

    // const handleSelect = (event) => {
    //     let newValue = event.target.value
    //     setSelect(newValue)
    //     setSubselect('')
    // }

    // const handleSubSelect = (event) => {
    //     let newValue = event.target.value
    //     setSubselect(newValue)
    // }



    const loaded = () => {
        return (
            <div className={styles.newsGrandparent}>
                <div className={styles.newsParent}>
                    {data.data.map((f, i) => {
                        if (f.default_image === null) {
                            return (<div></div>)
                        } else if (subselect === f.subsection || subselect === '') {
                            return (
                                <div key={i}>
                                    <a target='_blank'>
                                        <div className={styles.thumpCont}>
                                            {/* {console.log(f.default_image)} */}
                                            <img className={styles.thumpNail} src={f.default_image.medium_url} />
                                            <h4 id='thumpNailTitle'>{f.common_name}</h4>
                                        </div>
                                    </a>
                                </div>
                            )
                        }

                    })}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <button onClick={handleDec}>Previous</button>
                    <button onClick={handleInc}>Next</button>
                </div>
            </div >
        )
    }

    const notLoaded = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <ReactLoading type="spokes" color="#006241"
                    height={150} width={100} />
            </div>
        )
    }

    return data ? loaded() : notLoaded()

};

export default News