import React, { useState } from 'react'
import ReactStars from 'react-stars'
import '../styles/View.css'

/**
 * 
 * @param {visible, onSubmit, onCancel} props 
 */
const NewReviewCard = (props) => {
    const CLEAR_REVIEW = ''
    const CLEAR_RATING = 0
    const [newRating, setNewRating] = useState(0)
    const [newReview, setNewReview] = useState("")
    const [ratingStyle, setRatingStyle] = useState({}) // used to hide and show rating on toggle
    const [hideReviewToggle, setHideReviewToggle] = useState(false) // disable review input

    const validateForm = () => {
        return newReview !== '' && newRating > 0
    }

    const clearForm = () => {
        setNewReview(CLEAR_REVIEW)
        setNewRating(CLEAR_RATING)
    }

    // Missing Input Error Messaging
    const onHandleChange = (e) => {
        if (!e.target) {
            setNewRating(e)
            return
        }

        e.persist()
        if (e.target.id === "hideNewReview") {
            // toggle 
            setHideReviewToggle(e.target.checked)
            clearForm()
            setRatingStyle(!hideReviewToggle ? {visibility: 'hidden'} : {})
            return
        } 
        // record the text the user typed
        setNewReview(e.target.value)
    }

    const onCancel = () => {
        setHideReviewToggle(false)
        clearForm()
        props.onCancel()
        setRatingStyle({})
    }


    if (!props.visible) return null
    
    const today = new Date()
    return (
        <div className="new-review-wrapper">
            <div className="new-review-content md-form">
                <form className="new-review-form">
                    <div className="no-review-wrapper form-group">
                        <div className="no-review-content">
                            <input className="check-input" type="checkbox" id="hideNewReview" onChange={onHandleChange}/>
                            <label className="check-label" htmlFor="gridCheck">
                                Return without a review.
                            </label>
                        </div>
                    </div>
                    <div className='review-header'>
                        <p className='review-date'>{today.getMonth()}-{today.getDay()}-{today.getFullYear()}</p>
                        <div style={ratingStyle} ><ReactStars count={5} value={newRating} size={16} color2={'#ffd700'} onChange={onHandleChange} /></div>
                    </div>

                    <textarea value={newReview} className="form-control" aria-label="With textarea" rows="3" onChange={onHandleChange} disabled={hideReviewToggle}></textarea>
                    <div className="new-review-buttons">
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => onCancel()}>Cancel</button>
                        <button type="button" className="btn btn-success btn-sm" onClick={() => props.onSubmit(newRating, newReview)} disabled={!hideReviewToggle && !validateForm()}>Submit</button>
                    </div>
                    
                </form>     
            </div>
            <hr/>
        </div>
    ) 
}


export default NewReviewCard
