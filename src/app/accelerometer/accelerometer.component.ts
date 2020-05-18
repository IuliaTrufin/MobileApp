import { Component, OnInit } from '@angular/core';
import { Motion, MotionEventResult, Capacitor } from "@capacitor/core";

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css']
})
export class AccelerometerComponent implements OnInit {
  currentAcceleration;
  platform = Capacitor.getPlatform();

  constructor() { }

  ngOnInit() {
    if (this.isSupportedPlatform) {
      this.addAccelerometerListener(acceleration => { 
        console.log(acceleration.acceleration.x);
        console.log(acceleration.acceleration.y);
        console.log(acceleration.acceleration.z);
        this.currentAcceleration = acceleration.acceleration;
      });
    }
  }

  get isSupportedPlatform(){
    return this.platform !== "web"
  }

  addAccelerometerListener(callback: (event: MotionEventResult) => void) {
    Motion.addListener("accel", callback);
  }
}
