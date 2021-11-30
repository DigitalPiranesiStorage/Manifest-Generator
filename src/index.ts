import Item from "./types/Item";
import ItemAnnotation from "./types/ItemAnnotation";
import ItemAnnotationPage from "./types/ItemAnnotationPage";
import ItemCanvas from "./types/ItemCanvas";
import ItemTextualAnnotation from "./types/ItemTextualAnnotation";
import ItemWebAnnotation from "./types/ItemWebAnnotation";
import ItemWebAnnotationImage from "./types/ItemWebAnnotationImage";
import Label from "./types/Label";
import Manifest from "./types/Manifest";
import EnumAnnotationMotivation from "./types/enums/EnumAnnotationMotivation";
import EnumManifestBehavior from "./types/enums/EnumManifestBehavior";
import EnumWebAnnotationMotivation from "./types/enums/EnumWebAnnotationMotivation";
import IItem from "./types/interfaces/IItem";
import IJSONAble from "./types/interfaces/IJSONAble";
import ILabel from "./types/interfaces/ILabel";

var IIIF = {Item: Item, ItemAnnotation: ItemAnnotation, ItemAnnotationPage: ItemAnnotationPage,
  ItemCanvas: ItemCanvas, ItemTextualAnnotation: ItemTextualAnnotation, ItemWebAnnotation, ItemWebAnnotationImage, Label, Manifest, EnumAnnotationMotivation, EnumWebAnnotationMotivation, EnumManifestBehavior, IItem, IJSONAble, ILabel};
