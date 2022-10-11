import * as React from 'react';
import styles from "./MultiButton.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


class MultiButton extends React.Component {
    render() {

        return (
            <div className={styles.container}>
                <div className='e-btn-group'>
                    <input type="checkbox" id="checkbold" name="font" value="bold"/>
                    <label className="e-btn" htmlFor="checkbold">Bold</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkitalic" name="font" value="italic"/>
                    <label className="e-btn" htmlFor="checkitalic">Italic</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkline" name="font" value="underline"/>
                    <label className="e-btn" htmlFor="checkline">Underline</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkmmd" name="font" value="mmd"/>
                    <label className="e-btn" htmlFor="checkmmd">mmd</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkreza" name="font" value="reza"/>
                    <label className="e-btn" htmlFor="checkreza">reza</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkali" name="font" value="ali"/>
                    <label className="e-btn" htmlFor="checkali">ali</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkerfan" name="font" value="erfan"/>
                    <label className="e-btn" htmlFor="checkerfan">erfan</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkhassan" name="font" value="erfan"/>
                    <label className="e-btn" htmlFor="checkhassan">hassan</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkamir" name="font" value="erfan"/>
                    <label className="e-btn" htmlFor="checkamir">amir</label>
                </div>
                
                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkhamid" name="font" value="erfan"/>
                    <label className="e-btn" htmlFor="checkhamid">hamid</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkMeraj" name="font" value="erfan"/>
                    <label className="e-btn" htmlFor="checkMeraj">Meraj</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checknavid" name="font" value="erfan"/>
                    <label className="e-btn" htmlFor="checknavid">navid</label>
                </div>

                <div style={{margin: 10}} className='e-btn-group'>
                    <input type="checkbox" id="checkomid" name="font" value="erfan"/>
                    <label className="e-btn" htmlFor="checkomid">omid</label>
                </div>

                <input type="submit" className={styles.ipt} class="bg-warning border-0 px-1" onClick="#" />
                
            </div>
        );
    }
}

export default MultiButton;