import React from 'react'
import Button from 'react-bootstrap/Button';

export default function FindOutMoreButton(props) {
    return (
    <Button href={props.href} className="find-out-more">Find out more</Button>
    )}