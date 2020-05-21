import { Component, OnInit } from "@angular/core";
import { Capacitor, Camera, CameraResultType } from "@capacitor/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-camera",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.css"],
})
export class CameraComponent implements OnInit {
  image;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  takePicture() {
    return Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    }).then((x) => {
      console.log(x);
      this.image = this.sanitizer.bypassSecurityTrustResourceUrl(x.webPath);
      console.log(this.image);
    });
  }
}
